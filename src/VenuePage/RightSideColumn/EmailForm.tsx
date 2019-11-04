import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import axios, { AxiosResponse } from 'axios';

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

export const EmailForm: React.FunctionComponent = () => {
  let [form, setFormField] = React.useState<Record<string, string | number>>({
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    eventType: '', 
    budgetPerHead: '', 
    noOfGuests: '', 
    eventDate: '', 
    time: '', 
    duration: '', 
    messageBox: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    form[event.target.name] = event.target.value
     setFormField(form);
    console.log(form)
  }
  const handleSubmit = () => {
    console.log('Email submit button')
    axios({
      method: 'POST', 
      url: '/send',
      data: {
        form
      }
    })
    .then((response:AxiosResponse<any>) => {
      if(response.data.msg==='success'){
        console.log(response)
        console.log('successful send')
      }
      console.log('nope')
    })
  }


  return (
    <>
      <Typography variant="h6"> Your contact details</Typography>
      <Typography variant="caption">
        So venues can follow up with you
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            placeholder="First Name"
            name="firstName"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Last Name"
            name="lastName"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Email"
            name="email"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Phone"
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
      <Typography variant="h6"> Event Details</Typography>
      <Typography variant="caption">
        So venues can follow up with you
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            placeholder="Budget per head"
            name="budgetPerHead"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Guests"
            name="noOfGuests"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Event Date"
            name="eventDate"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Time"
            name="time"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Duration"
            name="duration"
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
           name='messageBox'
            multiline
            fullWidth
            rows="4"
            rowsMax="4"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}> 
        <Button variant="contained" fullWidth color="primary" onClick={handleSubmit}>
        <Typography>Submit</Typography>
      </Button>
        </Grid>
      </Grid>

      
    </>
  );
};
