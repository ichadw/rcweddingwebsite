import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Loader from "../Loader";

import { withFirebase } from "../Firebase";
import { oneOfType, func, node, object } from "prop-types";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  customAppBar: {
    backgroundColor: "#DB4766"
  },
  anchorNavBar: {
    color: "#fff",
    fontFamily: "'Great Vibes', cursive",
    fontSize: "22px",
    textDecoration: "none",
    fontWeight: "600"
  }
}));

const Layout = ({ children, firebase }) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.getHeader().onSnapshot(snapshot => {
      let dt = [];

      snapshot.forEach(doc => dt.push({ ...doc.data() }));

      setData(dt[0]);
      setLoading(false);
    });
  }, [firebase]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Helmet>
        <meta name="description" content={data.description} />
        <meta name="keyword" content={data.keyword} />
        <meta name="og:title" content={data.title} />
        <meta name="og:description" content={data.description} />
        <meta name="og:url" content={window.location.href} />
      </Helmet>
      <AppBar position="static" className={classes.customAppBar}>
        <Toolbar>
          <a href="/" className={classes.anchorNavBar}>
            Robin & Clarissa Wedding
          </a>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};

Layout.propTypes = {
  children: oneOfType([func, node]),
  firebase: object.isRequired,
};

export default withFirebase(Layout);
