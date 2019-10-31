import React from "react";
import { Grid, Tabs, Tab, Paper, Typography, Theme, makeStyles } from "@material-ui/core";
import { AmenitiesContainer } from "./AmenitiesContainer";
import { VenueOverviewContent } from "./VenueOverviewContent";
import { VenueTitleContent } from "./VenueTitleContent";
import { VenueIntro } from "./VenueIntro";
import { VenueGallery } from "./VenueGallery";

const useStyles = makeStyles((theme: Theme)=> ({
  mainBody: {
    border: 0
  }
}))

export const MainContent: React.FunctionComponent = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (newValue: number): void => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={1} >
        <Grid item xs={12}>
          <VenueGallery />

          <VenueTitleContent />
          <Paper elevation={0}  >
            <Tabs value={value} indicatorColor="primary" textColor="primary">
              <Tab label="overview" onClick={() => handleChange(0)} />
              <Tab label="Amenities" onClick={() => handleChange(1)} />
            </Tabs>
          </Paper>
          {value === 0 && <VenueOverviewContent />}
          {value === 0 && <VenueIntro />}
          {value === 1 && <AmenitiesContainer />}

          
        </Grid>
      </Grid>
    </>
  );
};
