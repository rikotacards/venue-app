import React from "react";
import {
  TextField,
  Button,
  Grid,
  Typography
} from "@material-ui/core";
import axios, { AxiosResponse } from 'axios';

export const EmailForm: React.FunctionComponent = () => {
  let [firstName, setFirstName] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     firstName =  event.target.value; 
     setFirstName(firstName);
     console.log(firstName)

  }
  const handleSubmit = () => {
    console.log('Email submit button')
    axios({
      method: 'POST', 
      url: '/send',
      data: {
        firstName
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
            fullWidth
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Last Name"
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Email"
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Phone"
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Event Type"
            fullWidth
            margin="dense"
            variant="outlined"
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
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Guests"
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Event Date"
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            placeholder="Time"
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Duration"
            fullWidth
            margin="dense"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            multiline
            fullWidth
            rows="4"
            rowsMax="4"
            variant="outlined"
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
