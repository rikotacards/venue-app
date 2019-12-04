import React, { useEffect } from "react";
import { VenueList } from "../VenueList/VenueList";
import { Typography, Box } from "@material-ui/core";
import {
  Route,
  RouteComponentProps,
  Switch,
  Redirect,
  useParams,
  useHistory,
} from "react-router";
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
  const [venueIndex, setIndex ] = React.useState<number>(0);
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
    null
  );
  let functionSelected = match.params.functionType;
  const eventType = match.params.eventType;

 const grabState = (data: VenueDataType[]) => {
    populateAppState(data);
 }

 const passUpIndex = (venueIndex: number)=> {
   setIndex(venueIndex)
 }

console.log('main content params', useParams())
console.log('from main',appState)
console.log('match', match)
console.log('appatate', appState && appState[venueIndex])
 
  return (
    <Box paddingTop="40px">
      <SideBarWithRouter openCloseStatus={true} />
      <Switch>
        <Route exact path={`${match.url}`}>
          <Redirect to={`${match.url}/featured`} />
        </Route>
        <Route exact path={`${match.url}/:eventType`}>
          <Box paddingLeft={sideNavOpen ? drawerWidth : 0}>
            <VenueList
              functionSelectedPath={functionSelected}
              isOpen={sideNavOpen}
              grabState={grabState}
              passUpIndex={passUpIndex}
            />
          </Box>
        </Route>
        <Route exact path={`${match.url}/:eventType/:venueName`}>
          <VenuePageContainer venueId={appState && appState[venueIndex].venuename || ''} isOpen={true} />
        </Route>
      </Switch>
    </Box>
  );
};

MainContentContainer = React.memo(MainContentContainer);

export { MainContentContainer };
