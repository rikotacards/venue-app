import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  makeStyles,
  Theme
} from "@material-ui/core";
import axios, { AxiosResponse } from "axios";
import LinearProgress from '@material-ui/core/LinearProgress';

interface formType {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  budgetPerHead: string;
  noOfGuests: string;
  eventDate: string;
  time: string;
  duration: string;
  messageBox: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  submitButton: {
    paddingTop: theme.spacing(1),
    background: (showWarning: boolean) =>
      showWarning ? theme.palette.error.main : theme.palette.primary.main,
      "&:hover": {
        background: (showWarning: boolean) =>
          showWarning ? theme.palette.error.main : theme.palette.action.active
      }
  },
  contactHeader: {
    paddingTop: theme.spacing(1),
    display:'flex',
    textAlign: 'left'
  },
  contactCaption: {
    display:'flex',
    textAlign: 'left'
  },
}));

export const EmailForm: React.FunctionComponent = () => {
  const [firstNameError, toggleFirstNameError] = React.useState<boolean>(false);
  const [lastNameError, toggleLastNameError] = React.useState<boolean>(false);
  console.log("EMAIL FORM RENDER", firstNameError, "lastname", lastNameError);
  const [emailError, toggleEmailError] = React.useState<boolean>(false);
  const [phoneError, togglePhoneError] = React.useState<boolean>(false);
  const [messageBoxError, toggleMessageBoxError] = React.useState<boolean>(false);
  const [showWarning, setWarning] = React.useState<boolean>(false);
  const classes = useStyles(showWarning);
  const [form, setFormField] = React.useState<Record<string, string>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "",
    budgetPerHead: "",
    noOfGuests: "",
    eventDate: "",
    time: "",
    duration: "",
    messageBox: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form[event.target.name] = event.target.value;
    setFormField(form);
    event.preventDefault();
    event.stopPropagation();
    if (
      form.firstName.length &&
      form.lastName.length &&
      form.email.length &&
      form.phone.length &&
      form.messageBox.length
    ) {
      setWarning(false);
    }
    console.log(form);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    event.stopPropagation();

    if(!form.firstName.length){
      toggleFirstNameError(true);
    } else {
      toggleFirstNameError(false);
    }

    if(!form.lastName.length){
      toggleLastNameError(true);
    } else {
      toggleLastNameError(false);
    }

    if(!form.email.length){
      toggleEmailError(true);
    } else {
      toggleEmailError(false);
    }
    if(!form.phone.length){
      togglePhoneError(true);
    } else {
      togglePhoneError(false);
    }

    if(!form.messageBox.length){
      toggleMessageBoxError(true);
    } else {
      toggleMessageBoxError(false);
    }

    if (
      !form.firstName.length ||
      !form.lastName.length ||
      !form.email.length ||
      !form.phone.length ||
      !form.messageBox.length
    ) {
      setWarning(true);
      return;
    }

    console.log("Email submit button");
    axios({
      method: "POST",
      url: "/send",
      data: {
        form
      }
    }).then((response: AxiosResponse<any>) => {
      if (response.data.msg === "success") {
        console.log(response);
        console.log("successful send");
        return;
      }
      console.log("nope");
    });
  };

  return (
    <form>
      <Typography variant="button" className={classes.contactHeader}> Your contact details</Typography>
      <Typography variant="caption" className={classes.contactCaption}>
        so venues follow up with you ASAP. 
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TextField
            required
            error={firstNameError}
            label="First Name"
            placeholder="First Name"
            name="firstName"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={lastNameError}
            label="Last Name"
            name="lastName"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={emailError}
            label="Email"
            name="email"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            error={phoneError}
            label="Phone no."
            name="phone"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Event Type"
            name="eventType"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Typography variant="button" className={classes.contactHeader}> Event Details</Typography>
      <Typography variant="caption" className={classes.contactCaption}>
        So venues can follow up with you
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <TextField
            placeholder="Budget per head"
            name="budgetPerHead"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Guests"
            name="noOfGuests"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Event Date"
            name="eventDate"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={messageBoxError}
            name="messageBox"
            required
            label="Any details of your event."
            multiline
            fullWidth
            rows="4"
            rowsMax="4"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            fullWidth
            color="primary"
            onClick={handleSubmit}
            className={classes.submitButton}
          >
            <Typography>
              {showWarning ? "Fill Required Info" : "submit"}
            </Typography>
           
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
