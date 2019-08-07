import React, { useEffect, useRef, useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withFirebase } from "../../../components/Firebase";

const LoveLetter = ({ firebase }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const alreadyFetch = useRef();

  const fetchAllMessages = () => {
    firebase.getMessages().onSnapshot(snapshot => {
      let dt = [];

      snapshot.forEach(doc => dt.push({ ...doc.data() }));
      console.log("dt", dt);

      setMessages(dt);
      setLoading(false);
    });

    alreadyFetch.current = true;
  };

  useEffect(() => {
    if (!alreadyFetch.current) {
      fetchAllMessages();
    }
  });

  console.log("messages", messages);

  if (loading) return "Loading...";

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>No</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Introduction</TableCell>
          <TableCell>Messages</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Created At</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {messages.map((res, idx) => {
          const createdDate = new Date(res.created).toLocaleString();

          return (
            <TableRow key={idx}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{res.name}</TableCell>
              <TableCell>{res.intro || "-"}</TableCell>
              <TableCell>{res.message || "-"}</TableCell>
              <TableCell>{res.email || "-"}</TableCell>
              <TableCell>{createdDate}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default withFirebase(LoveLetter);
