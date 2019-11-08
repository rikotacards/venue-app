import React from "react";
import { VenuePreviewItem } from "./VenuePreviewItem";
import { Grid, makeStyles, Box } from "@material-ui/core";
import { isMobile } from "../device";
import { VenueDataType } from "../MainContent/MainContentContainer";
import { VenuePageContainer } from "../VenuePage/VenuePageContainer";
import { useRouteMatch, Route } from "react-router";

interface VenueListProps {
  venueListData: VenueDataType[];
  isOpen?: boolean;
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
      {/* <Route path={`${match && match.path}/:topicId`}>
      <VenuePageContainer venueId={venue.venuename} isOpen={false}/>
    </Route> */}
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
