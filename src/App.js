import { hot } from "react-hot-loader";
import React from "react";
import image from "./img/gun.png";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <Router className="App">
      <Homepage />
    </Router>
  );
}

export default hot(module)(App);
