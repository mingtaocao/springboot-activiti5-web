import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Tab4 } from "./tab4";
import { Tab5 } from "./tab5";

export class Tab1 extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match);
  }
  componentDidMount() {
    console.log(this.props.match.path);
  }
  render() {
    return (
      <div className="tab">
        <div className="top">
          <div className="left">
            <Link to={`${this.props.match.path}/tab4`}>路由4</Link>
            <Link to={`${this.props.match.path}/tab5`}>路由5</Link>
          </div>
          <div className="right">
            <Route path={`${this.props.match.path}/tab4`} component={Tab4} />
            <Route path={`${this.props.match.path}/tab5`} component={Tab5} />
          </div>
        </div>
      </div>
    );
  }
}
