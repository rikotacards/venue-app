import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { venueDetailsData } from '../FakeData/VenueDetailsData'

interface VenuePageContainerProps {
  venueId: number | string;
}



export const VenuePageContainer: React.FunctionComponent<
  VenuePageContainerProps
> = props => {
    const { venueId } = props; 
    // Grab all venue information 
    const phone = venueDetailsData[venueId] && venueDetailsData[venueId].phone
  return (
    <Paper>
      <Grid container={true}>
        <Grid item={true}>
            Contact
        </Grid>
        <Grid item={true}>
            {phone}
        </Grid>
      </Grid>
    </Paper>
  );
};
