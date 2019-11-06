import React, { useEffect } from "react";
import { venueData } from "../FakeData/venueData";
import { VenueList } from "../VenueList/VenueList";
import { Typography, Theme, Box } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { VenuePageContainer } from "../VenuePage/VenuePageContainer";
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


// TODO Add a featured section in here above lists
let MainContentContainer: React.FunctionComponent<
  MainContentContainerProps
> = props => {
  const { isOpen, eventType, functionSelected } = props; 
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(
    null
  );
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
    <Switch>
      <Route path="/what">
        <VenuePageContainer venueId={"hotel_1"} isOpen={isOpen} />
      </Route>

      <Route path="/">
        <VenueList venueListData={appState} isOpen={isOpen} />
      </Route>
    </Switch>
  );
};

MainContentContainer = React.memo(MainContentContainer);

export { MainContentContainer };
