import React, { Fragment, useState } from "react";
import { arrayOf, object } from "prop-types";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import withGDoc from "../../../components/withGDoc";
import Canvas from "./Canvas";

const Invitation = ({ gData }) => {
  const [show, setShow] = useState([]);
  const handleGenerateInvitation = (nm, idx) => () => {
    if (!show.includes(idx)) {
      setShow(prevState => [...prevState, idx]);
    }
  };
  const dataPM = gData.filter(res => res.is_pm === "1");

  return (
    <Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Circle</TableCell>
            <TableCell>See Invitation</TableCell>
            <TableCell>Invitation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataPM.map((res, idx) => (
            <TableRow key={idx}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{res.name}</TableCell>
              <TableCell>{res.type}</TableCell>
              <TableCell>
                <button onClick={handleGenerateInvitation(res.name, idx)}>
                  See Invitation
                </button>
              </TableCell>
              <TableCell>
                {show.includes(idx) && <Canvas name={res.name} />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

Invitation.propTypes = {
  gData: arrayOf(object)
};

Invitation.defaultProps = {
  gData: []
};

export default withGDoc(Invitation);
