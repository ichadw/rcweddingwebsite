import React from "react";
import Loadable from "react-loadable";

const Loading = ({ error, pastDelay, timedOut }) => {
  if (error || timedOut) {
    throw new Error("Failed to load Home chunk");
  } else if (pastDelay) {
    return null;
  } else {
    return null;
  }
};

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "../Home/components"),
  loading: Loading
});

export default Home;
