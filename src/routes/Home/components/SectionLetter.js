import React, { memo, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "emotion";

const MainSectionText = css`
  text-align: center;
  display: block;
  font-size: 1.5rem;
`;

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexWrap: "wrap",
    padding: "8px 16px"
  }
});

const SectionLetter = () => {
  const [values, setValues] = useState({});
  const classes = useStyles();

  const handleChange = e => {
    const { value, id } = e;

    setValues(prevVal => ({ ...prevVal, [id]: value }));
  };

  const handleClickSend = () => {
    setValues({});
  };

  return (
    <section id="place">
      <Container>
        <Grid container spacing={2}>
          <Grid item sm={12} xs={12}>
            <div className={MainSectionText}>
              <h2>Send Some Love Letter to Us</h2>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={2} md={2} />
          <Grid item sm={8} md={8} xs={12}>
            <Paper>
              <div className={classes.container}>
                <TextField
                  id="name"
                  label="Your Name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="intro"
                  label="How do you know us ?"
                  fullWidth
                  value={values.intro}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="message"
                  label="What do you want to say to us ?"
                  fullWidth
                  value={values.message}
                  onChange={handleChange}
                  margin="normal"
                  multiline
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  id="email"
                  label="Put your email, so we can write you back sometimes"
                  fullWidth
                  value={values.email}
                  onChange={handleChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClickSend}
                >
                  Send
                </Button>
              </div>
            </Paper>
          </Grid>
          <Grid item sm={2} md={2} />
        </Grid>
      </Container>
    </section>
  );
};

export default memo(SectionLetter);
