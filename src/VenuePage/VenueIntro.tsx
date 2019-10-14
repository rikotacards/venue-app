import React from 'react'; 
import { makeStyles } from '@material-ui/styles';
import { Theme, Typography } from '@material-ui/core';

const useVenueIntroStyles = makeStyles((theme: Theme) => ({
    root: {
      textAlign: "left"
    }
  }));

export const VenueIntro: React.FunctionComponent = () => {
    const introParagraphClasses = useVenueIntroStyles();
    const introParagraph =
      "Faker information this is the paragraph Faker information this is the paragraphFaker information this is the paragraph ";
    return (
      <Typography variant="body1" className={introParagraphClasses.root}>
        {introParagraph}
      </Typography>
    );
  };