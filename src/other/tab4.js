import React, { Component } from "react";

import {Tab8} from "./tab8";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Tab4 extends React.Component {
  componentDidMount() {
    console.log(this.props.match.path);
  }
  render() {
    return (
      <div className="tab4">
        <div className="t4top">
          <Link to={`${this.props.match.path}/tab8`}>路由8</Link>
        </div>
        <div className="t4bottom">
          <Route path={`${this.props.match.path}/tab8`} component={Tab8} />
        </div>
      </div>
    );
  }
}
