import React, { Fragment } from "react";
import SectionBanner from "./SectionBanner";
import SectionAbout from "./SectionAbout";
import SectionPlace from "./SectionPlace";
import SectionMap from "./SectionMap";
import SectionLetter from "./SectionLetter";

const Home = () => {

  return (
    <Fragment>
      <SectionBanner />
      <SectionAbout />
      <SectionPlace />
      <SectionMap />
      <SectionLetter />
    </Fragment>
  );
};

export default Home;
