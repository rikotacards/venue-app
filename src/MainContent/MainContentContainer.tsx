import React, { useEffect } from "react";
import { venueData } from "../FakeData/venueData";
import { VenueList } from "../VenueList/VenueList";
import { Typography, Theme, Box } from "@material-ui/core";
import { Route, Switch } from "react-router";
import { VenuePageContainer } from "../VenuePage/VenuePageContainer";
import { makeStyles } from "@material-ui/styles";
const axios = require('axios').default;

interface MainContentContainerProps {
  eventType: string;
  isOpen?: boolean; 
}

// MainContentContainer will pass down the Event Type (eg Annual Dinner)
// TODO Add a featured section in here above lists
export const MainContentContainer: React.FunctionComponent<
  MainContentContainerProps
> = props => {
  const venueListData = venueData[props.eventType];
  const [eventData, grabData] = React.useState('0')

  useEffect(() => {
    console.log('hi')
    axios.get('/api/hello')
      .then((response: string)=> console.log(response))
  })

  if (!venueListData) {
    return <Typography>No venues in this category</Typography>;
  }
  return (
    <Switch>
      <Route path="/what">
        <VenuePageContainer venueId={"hotel_1"} isOpen={props.isOpen}/>
    
      </Route>

      <Route path="/">
        <VenueList venueListData={venueListData} isOpen={props.isOpen}/>
      </Route>
    </Switch>
  );
};
