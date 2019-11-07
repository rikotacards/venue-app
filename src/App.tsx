import React from "react";
import "./App.css";
import { TopAppBar } from "./AppBar/AppBar";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TopAppBar />
      </BrowserRouter>
    </div>
  );
};

export default App;
