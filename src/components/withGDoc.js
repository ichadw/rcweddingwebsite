import React, { useEffect, useRef, useState } from "react";
import Tabletop from "tabletop";

const withGDoc = Component => props => {
  const [gData, setGData] = useState([]);
  const alreadyFetch = useRef();

  useEffect(() => {
    if (!alreadyFetch.current) {
      alreadyFetch.current = true;
      Tabletop.init({
        key: process.env.REACT_APP_GDOCS_KEY,
        callback: googleData => {
          setGData(googleData);
        },
        simpleSheet: true
      });
    }
  }, [gData]);

  return <Component {...props} gData={gData} />;
};

export default withGDoc;
