import React from "react";
import {
  Grid,
  Button,
  makeStyles,
  Theme,
  Typography,
  Box
} from "@material-ui/core";
import { SidePanelHeader } from "./SidePanelHeader";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import GroupIcon from "@material-ui/icons/Group";

interface OtherDetailsContainerProps {
  venueSize: number | string;
  address: number | string;
  capacityStanding: number | string;
  capacitySitting: number | string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(1),
    textAlign: "left"
  },
  item: {
    display: "flex",
    flexDirection: "column"
  },
  icon: {
    paddingRight: theme.spacing(1)
  }
}));

export const OtherDetailsContainer: React.FunctionComponent<
  OtherDetailsContainerProps
> = props => {
  const { venueSize, address, capacityStanding, capacitySitting } = props;
  const classes = useStyles();
  return (
    <>
      <SidePanelHeader headerText={"Details"} />
      <Grid container={true} classes={classes} spacing={5}>
        <Grid item={true} xs={12} className={classes.item}>
          <Box display="flex" flexDirection="row">
            <AspectRatioIcon className={classes.icon} />
            <Typography variant="overline">Venue Size</Typography>
            <Typography>{venueSize}</Typography>
          </Box>
        </Grid>
        <Grid item={true} xs={12} className={classes.item}>
          <Box display="flex" flexDirection="row">
            <LocationOnIcon className={classes.icon} />{" "}
            <Typography variant="overline">Address</Typography>
          </Box>

          <Typography>{address}</Typography>
        </Grid>
        <Grid item={true} xs={12} className={classes.item}>
        <Box display="flex" flexDirection="row">

          <GroupIcon className={classes.icon} />
          <Typography variant="overline">Capacity</Typography> 
          </Box>
          <Typography>{capacityStanding}</Typography>
        </Grid>
        <Grid item={true} xs={12} className={classes.item}>
          <Typography variant="overline">Sitting Capacity</Typography>{" "}
          {capacitySitting}
        </Grid>
      </Grid>
    </>
  );
};
