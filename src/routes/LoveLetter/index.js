import Loadable from "react-loadable";

const Loading = ({ error, pastDelay, timedOut }) => {
  if (error || timedOut) {
    throw new Error("Failed to load LoveLetter chunk");
  } else if (pastDelay) {
    return null;
  } else {
    return null;
  }
};

const LoveLetter = Loadable({
  loader: () =>
    import(/* webpackChunkName: "love-letter" */ "../LoveLetter/components"),
  loading: Loading
});

export default LoveLetter;
