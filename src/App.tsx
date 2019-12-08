import React from "react";
import "./App.css";
import { TopAppBar } from "./AppBar/TopAppBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { MainContentContainerWithRouter } from "./MainContent/MainContentContainer";
import { Box } from "@material-ui/core";
import { isDesktop } from "./device/platform";

const App: React.FC = () => {
  const [isOpen, toggleSideNav] = React.useState(false);
  const isSideNavOpen = isDesktop() ? true : isOpen
  const functionNameClick = () => {
    toggleSideNav(true);
  };
  const openCloseSideNav = () => {
    toggleSideNav(!isOpen);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <TopAppBar
          toggleSideNav={functionNameClick}
          openCloseSideNav={openCloseSideNav}
        />
        <br />
        <Switch>
          <Route path="/:functionType"
          >
            <MainContentContainerWithRouter isSideNavOpen={ isSideNavOpen} openCloseSideNav={openCloseSideNav}/>
            </Route>
          
          <Route exact path="/">
            <Box marginTop="40px">'HOME PAGE'</Box>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
