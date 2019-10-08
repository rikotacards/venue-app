// TODO add feature to expand 
import React from 'react'
import { Grid, Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';


interface ContactContainerProps {
    phone: number | string; 
    email: string | number;
  }

const useClasses = makeStyles((theme: Theme) => ({
  contactBanner: {
    height: 
  }
}))
  
export const ContactContainer: React.FunctionComponent<ContactContainerProps> = props => {
    const { phone, email } = props; 
    const [callClicked, clickCall] = React.useState(false);
    const [ emailClicked, clickEmail ] = React.useState(false);
    const contactCard = callClicked ? (<Typography>{phone}</Typography>) : null;
    
    return (
    
      <Grid container={true}>
      <Grid item={true} xs={12}>
          <Typography >Contact Venue</Typography>
      </Grid>
      <Grid item={true} xs={12}>
         <Button onClick={() => clickCall(!callClicked)}>Call</Button>
         <Button>Email</Button>
      </Grid>
      <Grid item xs={12}> 
       {contactCard}
        </Grid>
    </Grid>
  
    )
  }