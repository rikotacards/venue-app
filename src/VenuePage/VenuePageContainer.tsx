// Recieves the venue ID from the Main Content Container

import React from "react";
import { Grid, makeStyles, Theme, Card, Paper } from "@material-ui/core";
import { venueDetailsData } from "../FakeData/VenueDetailsData";
import { ContactContainer } from "./ContactContainer";
import { BudgetDetailsContainer } from "./BudgetDetailsContainer";
import { OtherDetailsContainer } from "./OtherDetailsContainer";
import { MainContent } from "./MainContent";

interface VenuePageContainerProps {
  venueId: number | string;
}

const useClasses = makeStyles((theme: Theme) => ({
  venuHeader: {
    height: "300px"
  },
  paper: {
    marginBottom: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`
  },
  mainContent: {
    padding: theme.spacing(1),
    border: 0

  },
  container: {
    padding: '0 15%'
  }
}));

export const VenuePageContainer: React.FunctionComponent<
  VenuePageContainerProps
> = props => {
  const classes = useClasses();
  const { venueId } = props;
  // Grab all venue information
  const {
    phone,
    email,
    perHeadBudget,
    capacityStanding,
    capacitySitting,
    address,
    venueSize
  } = venueDetailsData[venueId] && venueDetailsData[venueId];
  return (
    <Grid container spacing={1} className={classes.container}>
     
      <Grid item xs={8}>
        <Paper className={classes.mainContent} elevation={0}>
          <MainContent />
        </Paper>
      </Grid>
      <Grid item xs={4} className={classes.venuHeader}>
        <Paper className={classes.paper} elevation={0}>
          <ContactContainer phone={phone} email={email} />
        </Paper>
        <Paper className={classes.paper} elevation={0}>
          <BudgetDetailsContainer perHeadBudget={perHeadBudget} />
        </Paper>
        <Paper className={classes.paper} elevation={0}>
          <OtherDetailsContainer
            address={address}
            capacityStanding={capacityStanding}
            capacitySitting={capacitySitting}
            venueSize={venueSize}
          />
        </Paper>
      </Grid>
    </Grid>
  );
};
