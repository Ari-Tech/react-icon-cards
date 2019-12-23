import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {LandingPage} from "./LandingPage";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className={'text-header'}>UI Design Card style</span>

      </header>
        <LandingPage/>
    </div>
  );
}

export default App;
