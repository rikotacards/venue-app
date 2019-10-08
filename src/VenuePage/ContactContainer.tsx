// TODO add feature to expand 
import React from 'react'
import { Grid, Button, Typography } from "@material-ui/core";


interface ContactContainerProps {
    phone: number | string; 
    email: string | number;
  }
  
export const ContactContainer: React.FunctionComponent<ContactContainerProps> = props => {
    const { phone, email } = props; 
    const [callClicked, clickCall] = React.useState(false);
    const contactCard = callClicked ? (<Typography>{phone}</Typography>) : null;
    
    return (
    
      <Grid container={true}>
      <Grid item={true} xs={12}>
          <Typography >Contact Venue</Typography>
      </Grid>
      <Grid item={true} xs={12}>
         <Button onClick={() => clickCall(!callClicked)}>Call</Button>
         <Button>Email</Button>
         {/* {phone} */}
      </Grid>
      <Grid item xs={12}> 
       {/* {email} */}
       {contactCard}
        </Grid>
    </Grid>
  
    )
  }