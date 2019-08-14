import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { oneOfType, func, node, object } from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Loader from "../Loader";
import Footer from "./Footer";
import { withFirebase } from "../Firebase";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  customAppBar: {
    position: "fixed",
    zIndex: 10000,
    backgroundColor: "#DB4766"
  },
  anchorNavBar: {
    color: "#fff",
    fontFamily: "'Great Vibes', cursive",
    fontSize: "22px",
    textDecoration: "none",
    fontWeight: "600",
    marginRight: "12px"
  },
  anchorList: {
    color: "#fff",
    fontFamily: "Open Sans",
    fontSize: "0.75rem",
    width: "70px",
    margin: "0 12px",
    fontWeight: "400",
    cursor: "pointer"
  }
}));

const Layout = ({ children, firebase }) => {
  const classes = useStyles();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.getHeader().onSnapshot(snapshot => {
      let dt = [];

      snapshot.forEach(doc => dt.push({ ...doc.data() }));

      setData(dt[0]);
      setLoading(false);
    });
  }, [firebase]);

  // const handleScrollTo = useCallback(
  //   id => () => {
  //     const posY = document.getElementById(id)
  //       ? document.getElementById(id).getBoundingClientRect().top - 64
  //       : 0;
  //     console.log("posY", document.getElementById(id).getBoundingClientRect());
  //     console.log("scrollHeight", document.getElementById(id).scrollHeight);
  //     window.scrollTo({
  //       top: posY,
  //       behavior: "smooth"
  //     });
  //   },
  //   []
  // );

  // const listAnchor = [
  //   { id: "about", title: "About" },
  //   { id: "place", title: "Wedding Events" },
  //   { id: "map", title: "Map Guide" },
  //   { id: "letter", title: "Send Letter" }
  // ];

  // const renderAnchorLink = () =>
  //   listAnchor.map((res, idx) => (
  //     <span
  //       key={idx}
  //       className={classes.anchorList}
  //       onClick={handleScrollTo(res.id)}
  //     >
  //       {res.title}
  //     </span>
  //   ));

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
          <Link to="/" className={classes.anchorNavBar}>
            R & C
          </Link>
          {/* {renderAnchorLink()} */}
        </Toolbar>
      </AppBar>
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: oneOfType([func, node]),
  firebase: object.isRequired
};

export default withFirebase(Layout);
