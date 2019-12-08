// Recieves the venue ID from the Main Content Container

import React from "react";
import { makeStyles, Theme, Paper, Box } from "@material-ui/core";
import { venueDetailsData } from "../FakeData/VenueDetailsData";
import { ContactContainer } from "./RightSideColumn/ContactContainer";
import { BudgetDetailsContainer } from "./RightSideColumn/BudgetDetailsContainer";
import { OtherDetailsContainer } from "./RightSideColumn/OtherDetailsContainer";
import { MainContent } from "./MainContent";
import { isDesktop, isMobile } from "../device";
import { useParams } from "react-router";
import { drawerWidth } from "../SideBarNav/SideBar";
import { VenueDataType } from "../MainContent/MainContentContainer";
import { AxiosResponse } from "axios";

const axios = require("axios").default;

interface VenuePageContainerProps {
  venueId: number | string;
  isOpen?: boolean;

}

const useClasses = makeStyles((theme: Theme) => ({
  paper: {
    marginBottom: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`
  },
  mainContent: {
    display: "flex",
    flexDirection: "column",
    border: 0,
    flexGrow: 1,
    flexBasis: isMobile() ? "100%" : "70%",
    marginRight: isMobile() ? 0 : theme.spacing(2),
    maxWidth: "550px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    padding: isDesktop() ? "0px 10%" : 0,
    flexWrap: isMobile() ? 'wrap': 'nowrap',
  },
  rightSideColumn: {
    display: "flex",
    flexDirection: "column",
    flexBasis: isMobile() ? "100%": "30%",
    flexShrink: 1
  }
}));

export const VenuePageContainer: React.FunctionComponent<
  VenuePageContainerProps
> = props => {
  const [appState, populateAppState] = React.useState<VenueDataType| null>(
    null
  );
  const { venueId, isOpen } = props;
  const classes = useClasses(isOpen);
  const {eventType, functionSelectedPath, venueName} = useParams();
  console.log('vnuepage containter', useParams())
  // Grab all venue information
console.log(useParams())
  React.useEffect(() => {
    axios
      .get(`/api/venueName/${venueName}`)
      .then((response: AxiosResponse) => {
        populateAppState(response.data);
      }, console.log('OWN VENUE', appState));
    
  }, [functionSelectedPath, eventType]);

if (!venueDetailsData[venueId]){
  return (null)
}
  const {
    phone,
    email,
    perHeadBudget,
    capacityStanding,
    capacitySitting,
    address,
    venueSize
  } = venueDetailsData[venueId];

  const rightSideColumn = (
    <Box className={classes.rightSideColumn}>
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
    </Box>
  );

  return (
      <Box className={classes.wrapper}>
        <Paper className={classes.mainContent} elevation={0}>
          <MainContent />
        </Paper>
        {rightSideColumn}
      </Box>
  );
};
