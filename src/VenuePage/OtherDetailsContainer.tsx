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
    flexDirection: "column",
    justifyContent: 'flex-end'
  },
  icon: {
    paddingRight: theme.spacing(1),
    // color: theme.palette.primary.main
  },
  venueMetrics: {
    paddingLeft: theme.spacing(4)
  }
}));
// TODO remove hardcoded values
export const OtherDetailsContainer: React.FunctionComponent<
  OtherDetailsContainerProps
> = props => {
  const { venueSize, address, capacityStanding, capacitySitting } = props;
  const classes = useStyles();
  return (
    <>
      <SidePanelHeader headerText={"Details"} />
      <Grid container={true} classes={classes} spacing={3}>
        <Grid item={true} xs={12} className={classes.item}>
          <Box display="flex" flexDirection="row">
            <AspectRatioIcon className={classes.icon} />
            <Typography variant="subtitle2">Venue Size</Typography>
          </Box>
          <Typography variant="caption" className={classes.venueMetrics}>
            {" "}
            2000 square ft{venueSize}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} className={classes.item}>
          <Box display="flex" flexDirection="row">
            <LocationOnIcon className={classes.icon} />{" "}
            <Typography variant="subtitle2">Address</Typography>
          </Box>
          <Typography variant="caption" className={classes.venueMetrics}>{address}</Typography>
        </Grid>
        <Grid item={true} xs={12} className={classes.item}>
          <Box display="flex" flexDirection="row">
            <GroupIcon   className={classes.icon} />
            <Typography variant="subtitle2">Capacity</Typography>
          </Box>
          <Typography variant="caption" className={classes.venueMetrics}>
            {capacityStanding}
          </Typography>
        </Grid>
        <Grid item={true} xs={12} className={classes.item}>
          <Typography variant="subtitle2">Sitting Capacity</Typography>{" "}
          {capacitySitting}
        </Grid>
      </Grid>
    </>
  );
};
