import React from "react";
import { VenuePreviewItem } from "./VenuePreviewItem";
import { Grid, makeStyles, Box } from "@material-ui/core";
import { isMobile } from "../device";
import { VenueDataType, Params } from "../MainContent/MainContentContainer";
import {  RouteComponentProps } from "react-router";
import { AxiosResponse } from "axios";
import classes from "*.module.css";
const axios = require("axios").default;



interface VenueListProps {
  venueListData: VenueDataType[];
  isOpen?: boolean;
  functionSelectedPath: string | null;
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
  // const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
  //   null
  // );
  // let functionSelected = match.path;

  // React.useEffect(() => {
  //   if(!eventType){
  //     axios
  //     .get(`/api/venues/${functionSelected}`)
  //     .then((response: AxiosResponse) => {
  //       console.log(response.data);
  //       populateAppState(response.data);
  //     }, console.log("appstate", appState));
  //   } else {
  //   axios
  //     .get(`/api/venues/${functionSelected}/${eventType}`)
  //     .then((response: AxiosResponse) => {
  //       console.log('WITH EVENT TYP')
  //       console.log(response.data);
  //       populateAppState(response.data);
  //     }, console.log("appstate", appState));
    
  // }}, [functionSelected, eventType]);
  const { venueListData, isOpen } = props;
  const classes = useStyles(isOpen);
  const venueList = venueListData.map(venue => (
    <>
    <Grid item={true} xs={12} md={4} spacing={5}>
      <VenuePreviewItem
        venueName={venue.venuename}
        id={venue.id}
        description={venue.venuedescription}
        capacitySitting={venue.capacitysitting}
        capacityStanding={venue.capacitystanding}
        budgetPerHead={venue.budgetperhead}
        address={venue.venueaddress}
      />
    </Grid>
    </>
  ));
  return (
    <>
    <Box className={classes.overlay}>
      <Grid container className={classes.venueListContainer}>
        {venueList}
      </Grid>
    </Box>
  
    </>
  );
};


{/* <Switch>
      <Route path="/what">
        <VenuePageContainer venueId={"hotel_1"} isOpen={isOpen} />
      </Route> */}
