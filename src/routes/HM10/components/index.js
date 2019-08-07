import React, { useCallback, useEffect, useRef, useState } from "react";
import request from "request";
import cheerio from "cheerio";
import { sortBy } from "lodash";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const HM10 = () => {
  const url = "https://www.fogu.com/hm10/villagers/";
  const cors = "https://cors-anywhere.herokuapp.com/";
  const allVillagersURL = `${cors}${url}`;
  const [villagers, setVillagers] = useState([]);
  const alreadyFetch = useRef();

  const fetchAllVillagers = useCallback(async () => {
    await request(allVillagersURL, (err, resp, html) => {
      if (!err) {
        const $ = cheerio.load(html);

        $("#content div:nth-child(4) div").each(async (idx, el) => {
          const first = $(el).find("p a:first-child");
          const villagerName = $(first)
            .find("img")
            .attr("title");
          const villagerImage = $(first)
            .find("img")
            .attr("src");
          const villagerURL = `${url}${$(first).attr("href")}`;

          await request(`${cors}${villagerURL}`, (err2, resp2, html2) => {
            if (!err2) {
              const $$ = cheerio.load(html2);

              const bday = $$("#content p:contains('Birthday:')")
                .text()
                .slice("Birthday:".length);
              const favAnimals = $$(
                "#content p:contains('Favorite Wild Animals:')"
              )
                .text()
                .slice("Favorite Wild Animals:".length);
              const disAnimals = $$(
                "#content p:contains('Disliked Wild Animals:')"
              )
                .text()
                .slice("Disliked Wild Animals:".length);
              const fTips = $$("#content p:contains('Friendship Tips:')")
                .text()
                .slice("Friendship Tips:".length);
              const table1st = $$(".data tbody tr:first-child td:last-child");
              const table2nd = $$(".data tbody tr:nth-child(2) td:last-child");
              const favGifts = table1st.html();
              const likeGifts = table2nd.html();

              const newVillager = {
                name: villagerName,
                image: villagerImage,
                url: villagerURL,
                bday,
                favAnimals,
                disAnimals,
                fTips,
                favGifts,
                likeGifts
              };

              setVillagers(prevVal =>
                sortBy([...prevVal, newVillager], ["name"])
              );
            }
          });
        });
      }
    });
    alreadyFetch.current = true;
  }, [allVillagersURL]);

  useEffect(() => {
    if (!alreadyFetch.current) {
      fetchAllVillagers();
    }
  }, [fetchAllVillagers]);

  return villagers.length > 0 && (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Notes</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {villagers.map((res, idx) => (
          <TableRow key={idx}>
            <TableCell>
              <img src={res.image} alt={res.name} />
            </TableCell>
            <TableCell>{res.name}</TableCell>
            <TableCell>{res.bday || "-"}</TableCell>
            <TableCell>
              <p>
                <strong>FAVORITED GIFTS</strong>
                <br />
                <span dangerouslySetInnerHTML={{ __html: res.favGifts }} />
              </p>
              <hr />
              <p>
                <strong>LIKED GIFTS</strong>
                <br />
                <span dangerouslySetInnerHTML={{ __html: res.likeGifts }} />
              </p>
              <hr />
              <p>
                <strong>FRIENDSHIP TIPS</strong>
                <br />
                {res.fTips}
              </p>
              <hr />
              <p>
                <strong>FAVORITE WILD ANIMALS</strong>
                <br />
                {res.favAnimals}
              </p>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default HM10;
