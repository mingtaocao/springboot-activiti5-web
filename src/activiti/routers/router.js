import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "../home";
export class Routers extends React.Component {
  render() {
    return (
      <Router>
        <div className="router">
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
      </Router>
    );
  }
}
