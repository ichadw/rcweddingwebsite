import React, { Fragment, useState } from "react";
import withGDoc from "../../components/withGDoc";
import { arrayOf, object } from "prop-types";
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
      <table>
        <thead>
          <tr>
            <td>No</td>
            <td>Name</td>
            <td>Circle</td>
            <td>See Invitation</td>
            <td>Invitation</td>
          </tr>
        </thead>
        <tbody>
          {dataPM.map((res, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{res.name}</td>
              <td>{res.type}</td>
              <td>
                <button onClick={handleGenerateInvitation(res.name, idx)}>
                  See Invitation
                </button>
              </td>
              <td>{show.includes(idx) && <Canvas name={res.name} />}</td>
            </tr>
          ))}
          <tr>
            <td />
          </tr>
        </tbody>
      </table>
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
