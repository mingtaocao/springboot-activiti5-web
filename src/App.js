import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import {Routers} from "./activiti/routers/router";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Routers />
      </div>
    );
  }
}

export default App;
