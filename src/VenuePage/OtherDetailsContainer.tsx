import React from "react";
import { Grid, Button, makeStyles, Theme } from "@material-ui/core";
import { SidePanelHeader } from "./SidePanelHeader";

interface OtherDetailsContainerProps {
  venueSize: number | string;
  address: number | string;
  capacityStanding: number | string;
  capacitySitting: number | string;
}

const useStyles = makeStyles((theme: Theme) => ({
   root: {
      padding: theme.spacing(1),
   }
}))

export const OtherDetailsContainer: React.FunctionComponent<
  OtherDetailsContainerProps
> = props => {
  const { venueSize, address, capacityStanding, capacitySitting } = props;
  const classes = useStyles();
  return (
    <>
      <SidePanelHeader headerText={"Details"} />
      <Grid container={true} classes={classes}>
        <Grid item={true} xs={12}>
          <b>Venue Size</b> {venueSize}
        </Grid>
        <Grid item={true} xs={12}>
         <b>Address</b> {address}
        </Grid>
        <Grid item={true} xs={12}>
          <b>Standing Capacity</b> {capacityStanding}
        </Grid>
        <Grid item={true} xs={12}>
          <b>Sitting Capacity</b> {capacitySitting}
        </Grid>
      </Grid>
    </>
  );
};
