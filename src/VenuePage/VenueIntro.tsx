import React from 'react'; 
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

const useVenueIntroStyles = makeStyles((theme: Theme) => ({
    root: {
      textAlign: "left",
      margin: '16px'
    }
  }));

export const VenueIntro: React.FunctionComponent = () => {
    const classes = useVenueIntroStyles();
    const introParagraph =
      "Faker information this is the paragraph Faker information this is the paragraphFaker information this is the paragraph ";
    return (
      <Typography variant="body1" className={classes.root}>
        {introParagraph}
      </Typography>
    );
  };