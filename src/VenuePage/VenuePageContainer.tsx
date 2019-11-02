// Recieves the venue ID from the Main Content Container

import React from "react";
import { Grid, makeStyles, Theme, Paper, Box } from "@material-ui/core";
import { venueDetailsData } from "../FakeData/VenueDetailsData";
import { ContactContainer } from "./RightSideColumn/ContactContainer";
import { BudgetDetailsContainer } from "./RightSideColumn/BudgetDetailsContainer";
import { OtherDetailsContainer } from "./RightSideColumn/OtherDetailsContainer";
import { MainContent } from "./MainContent";
import { isDesktop, isMobile } from "../device";

interface VenuePageContainerProps {
  venueId: number | string;
  isOpen?: boolean;
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
    // padding: theme.spacing(1),
    border: 0
  },
  container: {
    padding: isDesktop() ? "0 15%" : 0,
    opacity: (isOpen: boolean) =>isMobile() ? (isOpen ? 0.3 : 1) : 1

  }, 
  overlay:{
    background: (isOpen: boolean) =>isMobile() ? (isOpen  ? 'black': 'transparent') : 'transparent',

  }
}));

export const VenuePageContainer: React.FunctionComponent<
  VenuePageContainerProps
> = props => {
  const { venueId, isOpen } = props;
  const classes = useClasses(isOpen);
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

  const rightSideColumn = (
    <>
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
    </>
  );

  return (
    <Box className={classes.overlay}>

    <Grid container spacing={1} className={classes.container}>
      <Grid item xs={isMobile() ? 12 : 8}>
        <Paper className={classes.mainContent} elevation={0}>
          <MainContent />
        </Paper>
      </Grid>
      {isDesktop()? (<Grid item xs={4} className={classes.venuHeader}>
        {rightSideColumn}
      </Grid>) : null}
    </Grid>
    </Box>

  );
};
