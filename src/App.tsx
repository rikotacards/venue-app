import React from "react";
import "./App.css";
import { TopAppBar } from "./AppBar/TopAppBar";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import { VenuePageContainer } from "./VenuePage/VenuePageContainer";
import { MainContentContainer } from "./MainContent/MainContentContainer";
import { Box } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TopAppBar />
<br/>
        {/* <TopAppBar  /> */}
        <Switch>
        <Route path="/corporate-events">
          <Box marginTop='40px'>
          <MainContentContainer
            functionSelected={"corporate-events"}
            eventType={"Featured"}
          />
          </Box>
        </Route>
        <Route path="/party">
          <MainContentContainer
            functionSelected={"Party"}
            eventType={"Featured"}
          />
        </Route>

    
      </Switch>
      </BrowserRouter>
    
    </div>
  );
};

export default App;
