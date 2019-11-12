import React, { useEffect } from "react";
import { venueData } from "../FakeData/venueData";
import { VenueList } from "../VenueList/VenueList";
import { Typography, Theme, Box } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router";
import { AxiosResponse } from "axios";
const axios = require("axios").default;

interface MainContentContainerProps {
  eventType: string;
  functionSelected? : string;
  isOpen?: boolean;
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
  const { isOpen, eventType, functionSelected } = props; 
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
    null
  );
  let match = useRouteMatch();
  useEffect(() => {
    console.log('useeffect', functionSelected, eventType)
    axios.get(`/api/venues/${functionSelected}/${eventType}`)
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
    <Route exact path={match && match.path || '/'}>
        <VenueList venueListData={appState} isOpen={isOpen} />
    </Route>
    

    <Route exact path={`${match && match.path}/:venue` || '/'}>
        <VenueList venueListData={appState} isOpen={isOpen} />
    </Route>
    </>
  );
};

MainContentContainer = React.memo(MainContentContainer);

export { MainContentContainer };
