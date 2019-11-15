import React from "react";
import "./App.css";
import { TopAppBar } from "./AppBar/TopAppBar";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import { VenuePageContainer } from "./VenuePage/VenuePageContainer";
import { MainContentContainer } from "./MainContent/MainContentContainer";
import { Box } from "@material-ui/core";
import { SideBarWithRouter } from "./SideBarNav/SideBar";

const App: React.FC = () => {
  const [sideNavOpen, toggleSideNav] = React.useState(false);
  const functionNameClick = () => {
    toggleSideNav(true);
  };

  const openCloseSideNav = () => {
    toggleSideNav(!sideNavOpen)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <TopAppBar toggleSideNav={functionNameClick} openCloseSideNav={openCloseSideNav}/>
        <br />
        <Switch>
          <Route path="/corporate-events">
            <Box marginTop="40px">
              <MainContentContainer
                functionSelected={"corporate-events"}
                eventType={"Featured"}
                sideNavOpen={sideNavOpen}
              />
            </Box>
          </Route>
          <Route path="/party">
            <MainContentContainer
              functionSelected={"Party"}
              eventType={"Featured"}
              sideNavOpen={sideNavOpen}



            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
