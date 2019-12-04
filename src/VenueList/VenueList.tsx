import React from "react";
import { VenuePreviewItem } from "./VenuePreviewItem";
import { Grid, makeStyles, Box, Typography } from "@material-ui/core";
import { isMobile } from "../device";
import { VenueDataType, Params } from "../MainContent/MainContentContainer";
import {  RouteComponentProps, useParams } from "react-router";
import { AxiosResponse } from "axios";
const axios = require("axios").default;



interface VenueListProps {
  isOpen?: boolean;
  functionSelectedPath: string | null;
  grabState: (data:VenueDataType[])=> void;
  passUpIndex: (index:number) => void;
}

const useStyles = makeStyles(theme => ({
  overlay: {
    background: (isOpen: boolean) =>
      isMobile() ? (isOpen ? "grey" : "transparent") : "transparent"
  },
  venueListContainer: {
    opacity: (isOpen: boolean) => (isMobile() ? (isOpen ? 0.3 : 1) : 1)
  }
}));



// Receives an array of venues
// TODO instead of rendering {singleVenue} text, we need to render a component
export const VenueList: React.FunctionComponent<VenueListProps> = props => {
  const {functionSelectedPath, passUpIndex, isOpen } = props;
  const {eventType} = useParams();
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
    null
  );

  React.useEffect(() => {
    axios
      .get(`/api/venues/${functionSelectedPath}/${eventType}`)
      .then((response: AxiosResponse) => {
        populateAppState(response.data);
        props.grabState(response.data);
      });
    
  }, [functionSelectedPath, eventType]);
  const classes = useStyles(isOpen);
  const noVenue = (<Typography>No Venues</Typography>)
  const venueList = appState && appState.map((venue, index) => (
    
    <Grid item={true} xs={12} md={4} spacing={5}>
      <VenuePreviewItem
        venueName={venue.venuename}
        id={venue.id}
        index={index}
        description={venue.venuedescription}
        capacitySitting={venue.capacitysitting}
        capacityStanding={venue.capacitystanding}
        budgetPerHead={venue.budgetperhead}
        address={venue.venueaddress}
        key={venue.id}
        passUpIndex={passUpIndex}
      />
    </Grid>
    
  ));
  return (
    <>
    {!appState && noVenue}
    <Box className={classes.overlay}>
      <Grid container className={classes.venueListContainer}>
        {venueList}
      </Grid>
    </Box>
  
    </>
  );
};


