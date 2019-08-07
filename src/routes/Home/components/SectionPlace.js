import React, { memo } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "emotion";
import icon1 from "../assets/event_icon1.png";
import icon2 from "../assets/event_icon3.png";
import event1 from "../assets/evnt01.png";
import event2 from "../assets/evnt03.png";

const MainSectionText = css`
  text-align: center;
  display: block;
  font-size: 1.5rem;
`;

const useStyles = makeStyles({
  bgHolyMatrimony: {
    backgroundImage: `url(${event1})`,
    backgroundSize: "cover"
  },
  bgReceptions: {
    backgroundImage: `url(${event2})`,
    backgroundSize: "cover"
  },
  container: {
    textAlign: "center",
    padding: "8px",
    color: "#fff",
    minHeight: "300px"
  },
  icon: {
    width: "50px",
    height: "50px"
  },
  chip: {
    padding: "20px",
    fontWeight: "600",
    fontSize: "1rem",
  }
});

const SectionAbout = () => {
  const classes = useStyles();

  return (
    <section id="place">
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <div className={MainSectionText}>
              <h2>Wedding Events</h2>
            </div>
          </Grid>
          <Grid item sm={6} md={6} xs={12}>
            <Paper className={classes.bgHolyMatrimony}>
              <div className={classes.container}>
                <h2>Holy Matrimony</h2>
                <img className={classes.icon} src={icon1} alt="icon1" />
                <p>
                  <b>CHURCH CHRIST SALVATOR</b>
                  <br />
                  JL. KS. TUBUN NO. 128, SLIPI, JAKARTA BARAT
                </p>
                <Chip label="02.00PM" color="secondary" className={classes.chip} />
              </div>
            </Paper>
          </Grid>
          <Grid item sm={6} md={6} xs={12}>
            <Paper className={classes.bgReceptions}>
              <div className={classes.container}>
                <h2>Wedding Receptions</h2>
                <img className={classes.icon} src={icon2} alt="icon1" />
                <p>
                  <b>GRAND SLIPI TOWER</b>
                  <br />
                  JL. JENDRAL S. PARMAN KAV. 22-24
                  <br />
                  MEZZANINE (MZ) FLOOR, JAKARTA BARAT
                </p>
                <Chip label="07.00PM" color="secondary" className={classes.chip} />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default memo(SectionAbout);
