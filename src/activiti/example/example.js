/**
 * 已部署流程管理路由
 *
 * @Author: caomt
 * @Date: 2018-12-25 09:56:46
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-28 15:22:53
 */

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import expList from "./exp-list";
import ViewImg from "./view-img";
class Example extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid #e7eaec" }}>
        <Switch>
          <Route
            path={`${this.props.match.path}/expList`}
            component={expList}
          />
          <Route
            path={`${this.props.match.path}/viewImg/:deploymentId`}
            component={ViewImg}
          />
          <Redirect from="/" to="/home/example/expList" />
        </Switch>
      </div>
    );
  }
}

export default Example;
