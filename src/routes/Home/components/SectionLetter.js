import React, { useState } from "react";
import { object } from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { css } from "emotion";
import { withFirebase } from "../../../components/Firebase";
import useForm from "../../../components/hooks/useForm";

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

const validationStateSchema = {
  name: {
    required: true,
    validator: {
      regEx: /^[a-zA-Z\s]+$/,
      error: "Invalid name format."
    }
  },
  intro: {
    required: true
  },
  message: {
    required: true
  },
  email: {
    required: false,
    validator: {
      regEx: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,5})+$/,
      error: "Invalid email format"
    }
  }
};

const stateSchema = {
  name: { value: "", error: "" },
  intro: { value: "", error: "" },
  message: { value: "", error: "" },
  email: { value: "", error: "" }
};

const SectionLetter = ({ firebase }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);
  const classes = useStyles();

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleClickSend = state => {
    const data = {
      name: state.name.value,
      message: state.message.value,
      intro: state.intro.value,
      email: state.email.value,
      created: new Date().getTime()
    };
    setButtonLoading(true);
    firebase
      .createMessage(data)
      .then(docRef => {
        if (docRef.id) {
          setDialogOpen(true);
        }
        setButtonLoading(false);
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  const { state, handleOnChange, handleOnSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    handleClickSend
  );

  const renderDialog = (
    <Dialog onClose={handleClose} open={dialogOpen}>
      <DialogTitle>Thank You!</DialogTitle>
      <DialogContent>
        Your presence is important to us, so hopefully we can also share our
        happiness with you in our happy day.
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );

  return (
    <section id="letter">
      {renderDialog}
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
              <form className={classes.container} autoComplete="off">
                <TextField
                  error={state.name.error !== ""}
                  id="name"
                  label="Your Name"
                  fullWidth
                  value={state.name.value || ""}
                  helperText={state.name.error || ""}
                  onChange={handleOnChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  error={state.intro.error !== ""}
                  id="intro"
                  label="How do you know us ?"
                  fullWidth
                  value={state.intro.value || ""}
                  helperText={state.intro.error || ""}
                  onChange={handleOnChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  error={state.message.error !== ""}
                  id="message"
                  label="What do you want to say to us ?"
                  fullWidth
                  value={state.message.value || ""}
                  helperText={state.message.error || ""}
                  onChange={handleOnChange}
                  margin="normal"
                  multiline
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <TextField
                  error={state.email.error !== ""}
                  id="email"
                  label="Put your email, so we can write you back sometimes"
                  fullWidth
                  value={state.email.value || ""}
                  helperText={state.email.error || ""}
                  onChange={handleOnChange}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleOnSubmit}
                  disabled={disable || buttonLoading}
                >
                  Send
                </Button>
              </form>
            </Paper>
          </Grid>
          <Grid item sm={2} md={2} />
        </Grid>
      </Container>
    </section>
  );
};

SectionLetter.propTypes = {
  firebase: object.isRequired
};

export default withFirebase(SectionLetter);
