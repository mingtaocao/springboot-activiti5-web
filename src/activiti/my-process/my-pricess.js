/**
 * 用户启动的流程管理路由
 *
 * @Author: caomt
 * @Date: 2018-12-25 09:57:53
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-25 09:58:22
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import MyStartProcessList from "./myStartProcessList";
import ProcessHis from "./process-his";
class MyProcess extends Component {
  static propTypes = {};

  render() {
    return (
      <div style={{ border: "1px solid #e7eaec" }}>
        <Switch>
          <Route
            path={`${this.props.match.path}/list`}
            component={MyStartProcessList}
          />
          <Route
            path={`${this.props.match.path}/detail/:id`}
            component={ProcessHis}
          />
          <Redirect from="/" to="/home/myProcess/list" />
        </Switch>
      </div>
    );
  }
}

export default MyProcess;
