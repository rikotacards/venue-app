import React from 'react';
import './App.css';
import { DenseAppBar } from './AppBar/AppBar'
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <DenseAppBar/>
      </BrowserRouter>
    </div>
  );
}

export default App;
