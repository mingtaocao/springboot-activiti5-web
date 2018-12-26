/**
 * model 管理路由
 * @Author : caomt
 * @Date : 2018-12-25 09:51:20
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-26 14:17:15
 */
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import List from "./list";
import Edit from "./edit";
class Definition extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid #e7eaec" }}>
        <Switch>
          <Route path={`${this.props.match.path}/list`} component={List} />
          <Route path={`${this.props.match.path}/add`} component={Edit} />
          <Route
            path={`${this.props.match.path}/edit/:modelId`}
            component={Edit}
          />
          <Redirect from="/" to="/home/definition/list" />
        </Switch>
      </div>
    );
  }
}

export default Definition;
