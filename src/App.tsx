import React from "react";
import "./App.css";
import { TopAppBar } from "./AppBar/TopAppBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { VenuePageContainer } from "./VenuePage/VenuePageContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TopAppBar />

        {/* <TopAppBar  /> */}
      </BrowserRouter>
    
    </div>
  );
};

export default App;
