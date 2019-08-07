import React, { memo } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { css } from "emotion";

const MainSectionText = css`
  text-align: center;
  display: block;
  font-size: 1.5rem;
`;

const SectionMap = () => {
  return (
    <section id="map">
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <div className={MainSectionText}>
              <h2>Map Guide</h2>
            </div>
          </Grid>
          <Grid item sm={6} xs={12}>
              <div className="gmap_canvas">
                <iframe
                  title="holy_matrimony"
                  width="100%"
                  height="300"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=kristus%20salvator&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
          </Grid>
          <Grid item sm={6} xs={12}>
              <div className="gmap_canvas">
                <iframe
                  title="venue"
                  width="100%"
                  height="300"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=grand%20slipi%20tower&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default memo(SectionMap);
