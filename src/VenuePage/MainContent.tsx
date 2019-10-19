import React from "react";
import {
  Grid,
  Divider
} from "@material-ui/core";
import { AmenitiesContainer } from "./AmenitiesContainer";
import { VenueOverviewContent } from './VenueOverviewContent';
import { VenueTitleContent } from './VenueTitleContent';
import { VenueIntro } from './VenueIntro';
import { VenueGallery } from './VenueGallery';

export const MainContent: React.FunctionComponent = () => {
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <VenueGallery />
          <VenueTitleContent />
          <Divider/>
          <VenueOverviewContent />
          <VenueIntro />
          <AmenitiesContainer/>
        </Grid>
      </Grid>
    </>
  );
};
