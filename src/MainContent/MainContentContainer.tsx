import React, { useEffect } from "react";
import { VenueList } from "../VenueList/VenueList";
import {  Box, makeStyles, Theme } from "@material-ui/core";
import {
  Route,
  RouteComponentProps,
  Switch,
  Redirect,
  withRouter,
} from "react-router";
import { SideBarWithRouter, drawerWidth } from "../SideBarNav/SideBar";
import { VenuePageContainer } from "../VenuePage/VenuePageContainer";
const axios = require("axios").default;

export type Params = { eventType?: string; functionType: string };

interface MainContentContainerProps  {
  isSideNavOpen: boolean;
  openCloseSideNav: () => void;
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



const useStyles = makeStyles((theme: Theme) => ({
  offset: theme.mixins.toolbar
}))

let MainContentContainer: React.FunctionComponent<MainContentContainerProps & RouteComponentProps<Params>> = props => {
  const { isSideNavOpen = true, match, openCloseSideNav } = props;
  const classes = useStyles();
  const [venueIndex, setIndex ] = React.useState<number>(0);
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
    null
  );
  let functionSelected = match.params.functionType;

 const grabState = (data: VenueDataType[]) => {
    populateAppState(data);
 }

 const passUpIndex = (venueIndex: number)=> {
   setIndex(venueIndex)
 }

 console.log('appstate', appState)
 
  return (
    <>
    <div className={classes.offset}/>
    <Box>
      <SideBarWithRouter isSideNavOpen={isSideNavOpen} openCloseSideNav={openCloseSideNav}/>
      <Switch>
        <Route exact path={`${match.url}`}>
          <Redirect to={`${match.url}/featured`} />
        </Route>
        <Route exact path={`${match.url}/:eventType`}>
          <Box paddingLeft={isSideNavOpen ? drawerWidth : 0}>
            <VenueList
              functionSelectedPath={functionSelected}
              isOpen={isSideNavOpen}
              grabState={grabState}
              passUpIndex={passUpIndex}
            />
          </Box>
        </Route>
        <Route exact path={`${match.url}/:eventType/:venueName`}>
        <Box paddingLeft={isSideNavOpen ? drawerWidth : 0}>

          <VenuePageContainer venueId={appState && appState[venueIndex].venuename || ''} isOpen={true} />
          </Box>

        </Route>
      </Switch>
    </Box>
    </>
  );
};

// MainContentContainer = React.memo(MainContentContainer);

export const MainContentContainerWithRouter = withRouter(MainContentContainer);
