import React from "react";
import Loadable from "react-loadable";

const Loading = ({ error, pastDelay, timedOut }) => {
  if (error || timedOut) {
    throw new Error("Failed to load Invitation chunk");
  } else if (pastDelay) {
    return null;
  } else {
    return null;
  }
};

const Invitation = Loadable({
  loader: () =>
    import(/* webpackChunkName: "invitation" */ "../Invitation/components"),
  loading: Loading
});

export default Invitation;
