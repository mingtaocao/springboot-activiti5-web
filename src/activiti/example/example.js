/**
 * 已部署流程管理路由
 *
 * @Author: caomt
 * @Date: 2018-12-25 09:56:46
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-26 14:17:06
 */

import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import expList from "./exp-list";
class Example extends React.Component {
  render() {
    return (
      <div style={{ border: "1px solid #e7eaec" }}>
        <Switch>
          <Route
            path={`${this.props.match.path}/expList`}
            component={expList}
          />
          <Redirect from="/" to="/home/example/expList" />
        </Switch>
      </div>
    );
  }
}

export default Example;
