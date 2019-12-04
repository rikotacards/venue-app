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
          
          {/* <Route  path="/:functionType/:eventType" component={MainContentContainer}/> */}
          <Route path="/:functionType" component={MainContentContainer} 
          />
}/>


         

          <Route exact path="/">
            <Box marginTop="40px">
              'HOME PAGE'
            </Box>
          </Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
