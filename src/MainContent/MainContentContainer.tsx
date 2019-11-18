import React, { useEffect } from "react";
import { VenueList } from "../VenueList/VenueList";
import { Typography, Box } from "@material-ui/core";
import { Route, useRouteMatch } from "react-router";
import { AxiosResponse } from "axios";
import { SideBarWithRouter, drawerWidth } from "../SideBarNav/SideBar";
const axios = require("axios").default;

interface MainContentContainerProps {
  eventType: string;
  functionSelected? : string;
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

let MainContentContainer: React.FunctionComponent<
  MainContentContainerProps
> = props => {
  const { sideNavOpen, eventType } = props; 
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
    null
  );
  let match = useRouteMatch()
  let functionSelected = match && match.path
  console.log('match from maincontent container', match)
  useEffect(() => {
    axios.get(`/api/venues${functionSelected}/${eventType}`)
    .then((response: AxiosResponse) => {
      populateAppState(response.data);
    });
  }, [functionSelected, eventType]);
  console.log('App state', appState);
  if (!appState || !appState.length) {
    return <Typography>No venues in this category</Typography>;
  }
  return (
    
   <>
    <SideBarWithRouter
      openCloseStatus={sideNavOpen}
      nameSpace={functionSelected && functionSelected.substr(1) || ''}
    />
    
    <Route exact path={`${match && match.path}:/eventType` || '/'}>
      <Box paddingLeft= {sideNavOpen ? drawerWidth : 0}>
        <VenueList venueListData={appState} isOpen={sideNavOpen} />
        </Box>
    </Route>
   </>
  );
};

MainContentContainer = React.memo(MainContentContainer);

export { MainContentContainer };
