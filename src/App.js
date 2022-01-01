import {hot} from "react-hot-loader";
import React from 'react';
import image from './img/gun.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Welcome to my Website! Please hire me!
         <h2>Robert Stachurski</h2>
         <img src={image} alt ="gun-image"/>
      </h1>

    </div>
  );
}

export default hot(module)(App);
