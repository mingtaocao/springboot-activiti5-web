/**
 * Task 路由
 * @Author : caomt 
 * @Date : 2018-12-25 09:50:19 
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-25 17:51:23
 */
import React, { Component } from "react";
import TaskList from "./task-list";
import {
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import TaskHandle from "./task-handle";
class Task extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <div style={{ border: "1px solid #e7eaec" }}>
          <Switch>
            <Route
              path={`${this.props.match.path}/taskList`}
              component={TaskList}
            />
            <Route
              path={`${this.props.match.path}/taskHandle/:processInstanceId`}
              component={TaskHandle}
            />
            <Redirect from="/" to="/home/task/taskList" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Task;
