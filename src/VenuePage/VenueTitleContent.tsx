import React from 'react'; 
import { Typography, makeStyles, Theme } from "@material-ui/core";

const useTitleStyles = makeStyles((theme: Theme) => ({
    root: {
      textAlign: "left",
      paddingTop: theme.spacing(1)
    }
  }));

export const VenueTitleContent: React.FunctionComponent = () => {
    const titleClasses = useTitleStyles();
    const venueName = "The Grand Hyatt"; // TODO
    return (
      <Typography variant="h4" className={titleClasses.root}>
        {venueName}
      </Typography>
    );
  };