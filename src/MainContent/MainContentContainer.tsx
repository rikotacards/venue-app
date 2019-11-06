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
  isOpen?: boolean;
}

interface VenueDataType {
  id: number;
  venuename: string;
  venueaddress: string;
  venuedescription: string;
  phonenumber: string;
  email: string;
  capacitystanding: string;
  capacitysitting: string;
  venuetype: string;
  venuesize: string;
  budgetperhead: number;
  category?: string[];
}

// MainContentContainer will pass down the Event Type (eg Annual Dinner)
// TODO Add a featured section in here above lists
let MainContentContainer: React.FunctionComponent<
  MainContentContainerProps
> = props => {
  const venueListData = venueData[props.eventType];
  const [appState, populateAppState] = React.useState<VenueDataType[] | null>(null);
console.log('before')
  useEffect(() => {
    axios.get("/api/retrieveVenues").then((response: AxiosResponse) => {
      populateAppState(response.data);
    });
  }, []);
console.log(appState);
  if (!venueListData) {
    return <Typography>No venues in this category</Typography>;
  }
  return (
    <Switch>
      <Route path="/what">
        <VenuePageContainer venueId={"hotel_1"} isOpen={props.isOpen} />
      </Route>

      <Route path="/">
        <VenueList venueListData={venueListData} isOpen={props.isOpen} />
      </Route>
    </Switch>
  );
};

MainContentContainer = React.memo(MainContentContainer)

export { MainContentContainer };