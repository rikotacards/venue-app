import React from 'react';
import { Grid, Button } from '@material-ui/core';


interface OtherDetailsContainerProps {
    venueSize: number | string;
    address: number | string;
    capacityStanding: number | string;
    capacitySitting: number | string;
  }
  
export const OtherDetailsContainer: React.FunctionComponent<OtherDetailsContainerProps> = props => {
    const { venueSize, address, capacityStanding, capacitySitting } = props; 
  
    return (
      <Grid container={true}>
      <Grid item={true} xs={12}>
          <Button size="small" variant="text">Details</Button>
      </Grid>
      <Grid item={true} xs={12}>
         Venue Size {venueSize}
      </Grid>
      <Grid item={true} xs={12}>
         Address: {address}
      </Grid>
      <Grid item={true} xs={12}>
         Capacity Standing: {capacityStanding}
      </Grid>
      <Grid item={true} xs={12}>
         Capacity Sitting: {capacitySitting}
      </Grid>
    </Grid>
  
    )
  }