import React, { memo } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import ichaImage from "../assets/icha.jpg";
import obinImage from "../assets/obin.jpeg";
import { css } from "emotion";

const MainSectionText = css`
  text-align: center;
  display: block;
  font-size: 1.5rem;

  hr {
    width: 15%;
    border-radius: 10px;
    border: 1px solid #eee;
    background: #eee;
    box-shadow: 1px 0px 4px #ccc;
  }

  p {
    font-size: 1rem;
  }
`;

const SocialIcons = css({
  a: {
    border: "2px solid #9e9d9d",
    fontSize: "15px",
    textAlign: "center",
    background: "transparent",
    color: "#9e9d9d",
    borderRadius: "50%",
    lineHeight: "26px",
    transition: "all 0.25s ease",
    marginRight: "4px",
    marginLeft: "4px",
    padding: "8px 12px"
  },
  "a:hover": {
    border: "2px solid #DB4766",
    color: "#DB4766"
  }
});

const useStyles = makeStyles({
  bigAvatar: {
    width: "250px",
    height: "250px",
    margin: "0 auto",
    boxShadow: "1px 0 12px #ccc"
  },
  textCenter: {
    textAlign: "center"
  },
  h3big: {
    fontSize: "2rem"
  }
});

const SectionAbout = () => {
  const classes = useStyles();

  return (
    <section id="about">
      <Container>
        <Grid container>
          <Grid item sm={12}>
            <div className={MainSectionText}>
              <h2>Meet The Groom & Bride</h2>
              <hr />
              <p>
                We officially first met in 2016. Though we are on same age in
                the same university, we never cross path even once. Our first
                relations is just business, until we decided to going steady at
                July 30, 2016. Then in 2018, Robin proposed to Clarissa. And
                here we are announce our Wedding on September 29, 2019. Please
                come to celebrate this happy day with us.
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6} sm={6} xs={12}>
            <div className={classes.textCenter}>
              <Avatar
                src={obinImage}
                alt="Groom"
                className={classes.bigAvatar}
              />
              <h3 className={classes.h3big}>Robin Cosamas Bagus Karyadi</h3>
              <p className={SocialIcons}>
                <a
                  href="http://instagram.com/robincosamas"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/robin-cosamas-bagus-k-0892a556/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </p>
            </div>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <div className={classes.textCenter}>
              <Avatar
                src={ichaImage}
                alt="Bride"
                className={classes.bigAvatar}
              />
              <h3 className={classes.h3big}>Clarissa April Liana</h3>
              <p className={SocialIcons}>
                <a
                  href="http://instagram.com/clarissaprl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/clarissa-april-liana-05ab6744/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default memo(SectionAbout);
