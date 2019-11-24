import React, { useEffect } from "react";
import { VenueList } from "../VenueList/VenueList";
import { Typography, Box } from "@material-ui/core";
import { Route, useRouteMatch, RouteComponentProps } from "react-router";
import { AxiosResponse } from "axios";
import { SideBarWithRouter, drawerWidth } from "../SideBarNav/SideBar";
import { VenuePageContainer } from "../VenuePage/VenuePageContainer";
const axios = require("axios").default;
export type Params = { eventType?: string; functionType: string };

interface MainContentContainerProps extends RouteComponentProps<Params> {
  eventType: string;
  functionSelected?: string;
  isOpen?: boolean;
  sideNavOpen: boolean;
}

export interface VenueDataType {
  id: number;
  venuename: string;
  featured: boolean;
  venueaddress: string;
  venuedescription: string;
  phonenumber: string;
  email: string;
  capacitystanding: number;
  capacitysitting: number;
  venuetype: string;
  venuesize: string;
  budgetperhead: number;
  category?: string[];
}

let MainContentContainer: React.FunctionComponent<MainContentContainerProps> = props => {
  const { sideNavOpen = true, match } = props;
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
    null
  );
  console.log("match maincontent container", match);
  let functionSelected = match.params.functionType;
  const eventType = match.params.eventType;

  //FLOW1:INITAL DATA GRAB - to do, grab featured first, now grab all.
  useEffect(() => {
    if (!eventType) {
      axios
        .get(`/api/venues/${functionSelected}`)
        .then((response: AxiosResponse) => {
          console.log(`GRAB ALL FROM ${functionSelected}`, response.data);
          populateAppState(response.data);
        }, console.log("appstate from FIRST GRAB", appState));
    } else {
      axios
        .get(`/api/venues/${functionSelected}/${eventType}`)
        .then((response: AxiosResponse) => {
          console.log("WITH EVENT TYP");
          console.log(response.data);
          populateAppState(response.data);
        }, console.log("appstate", appState));
    }
  }, [functionSelected, eventType]);

  if (!appState || !appState.length) {
    return (
      <Box paddingTop="40px">
        <Typography color="textPrimary">No venues in this category</Typography>
      </Box>
    );
  }
  return (
    <Box paddingTop="40px">
      <SideBarWithRouter openCloseStatus={true} nameSpace={functionSelected} />
      <Route exact path={`${match.path}`}>
        <Box paddingLeft={sideNavOpen ? drawerWidth : 0}>
          <VenueList
            functionSelectedPath={functionSelected}
            venueListData={appState}
            isOpen={sideNavOpen}
          />
        </Box>
      </Route>
      <Route path={`${match.path}/:eventType`}>
        <Box paddingLeft={sideNavOpen ? drawerWidth : 0}>
          <VenueList
            functionSelectedPath={functionSelected}
            venueListData={appState}
            isOpen={sideNavOpen}
          />
        </Box>
      </Route>
    </Box>
  );
};

MainContentContainer = React.memo(MainContentContainer);

export { MainContentContainer };
