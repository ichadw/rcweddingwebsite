import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "#DB4766",
    color: "#fff",
    textAlign: "center",
    padding: "12px",
    marginTop: "32px"
  }
}));

const Footer = () => {
  const classes = useStyles();
  const today = new Date();

  return (
    <footer className={classes.container}>
      Robin & Clarissa Wedding. {today.getFullYear()}
    </footer>
  );
};

export default Footer;
