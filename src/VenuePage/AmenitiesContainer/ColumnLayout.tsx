import React from "react";
import { Typography, makeStyles, Theme, Box } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between"
  },
  content: {
    alignText: "left"
  }
}));
export const ColumnLayout: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box alignContent="left">
      <Typography variant="subtitle2" className={classes.header}>
        Space and Layout
      </Typography>
      <Typography variant="caption" className={classes.content}>
        Space and LayoutSpace and LayoutSpace and LayoutSpace and LayoutSpace
        and LayoutSpace and LayoutSpace and LayoutSpace and LayoutSpace and
        LayoutSpace and LayoutSpace and LayoutSpace and LayoutSpace and
        LayoutSpace and LayoutSpace and LayoutSpace and LayoutSpace and
        LayoutSpace and LayoutSpace and LayoutSpace and LayoutSpace and
        LayoutSpace and LayoutSpace and LayoutSpace and LayoutSpace and Layout
      </Typography>

      <Typography variant="subtitle2" className={classes.header}>
        Food and drinks
      </Typography>
      <Typography variant="subtitle2" className={classes.header}>
        Technical Equipment
      </Typography>
    </Box>
  );
};
