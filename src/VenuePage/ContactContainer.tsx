import React from "react";
import { Grid, Button, Typography, Theme, makeStyles } from "@material-ui/core";
import { SidePanelHeader } from "./SidePanelHeader";
import { EmailForm } from './EmailForm'

interface ContactContainerProps {
  phone: number | string;
  email: number | string;
}



const useStyles = makeStyles((theme: Theme) => ({
  root: {
     padding: theme.spacing(1),
  }
}))

export const ContactContainer: React.FunctionComponent<
  ContactContainerProps
> = props => {
  const { phone, email } = props;
  const classes = useStyles();
  const [showNumber, toggleShowNumber] = React.useState(false);
  const [showEmail, toggleShowEmail] = React.useState(false);
  const contactCard = () => {
    if (showNumber){
      return (
        <Typography>{phone}</Typography>
      )
    }
    if (showEmail){
      return (
        <EmailForm /> 
      )
    }
    return null
  }


  return (
    <>
    <SidePanelHeader headerText={'Contact Venue'}/>
    <Grid container={true} classes={classes}>
      <Grid item={true} xs={12}>
        <Button onClick={() => toggleShowNumber(!showNumber)}>Call</Button>
        <Button onClick= {() => toggleShowEmail(!showEmail)}>Email</Button>
      </Grid>
      <Grid item xs={12}>
        {contactCard()}
      </Grid>
    </Grid>
    </>
  );
};
