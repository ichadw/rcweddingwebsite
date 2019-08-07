import Loadable from "react-loadable";

const Loading = ({ error, pastDelay, timedOut }) => {
  if (error || timedOut) {
    throw new Error("Failed to load HM10 chunk");
  } else if (pastDelay) {
    return null;
  } else {
    return null;
  }
};

const HM10 = Loadable({
  loader: () =>
    import(/* webpackChunkName: "hm10" */ "../HM10/components"),
  loading: Loading
});

export default HM10;
