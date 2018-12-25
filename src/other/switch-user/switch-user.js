import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Radio, Icon } from "antd";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
class SwitchUser extends Component {
  static propTypes = {};
  handleSizeChange = e => {
    let token = {
      xiaoming:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ1NjIwODQ3Nzk1LCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjoxfQ.XhsS2TmbTz9_IBcZLRhtvDn0gE4GrC6YOIUdWEfTsMs",
      xiaohong:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ1NTUxMjM0MjIxLCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjoyfQ.iDIsNHi2VKlnfE7lLYlGGyFILCMh-CeNjjUOyGuqS8s",
      xiaozhang:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ1NTY4NDExNzM1LCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjozfQ.zR8MVymlfvol2eIyhw6L9jSR6wiCyVLhp9D0f7s4CTA",
      xiaowang:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ1NTY4NDM1ODE0LCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjo0fQ.1vkfibIjTBCqHLr64TL_6xLLlv1wB6BqT7Z9BV6xkFc"
    };
    if (e.target.value === "xiaoming") {
      localStorage.setItem("myTaoAuthorization", token.xiaoming);
    } else if (e.target.value === "xiaohong") {
      localStorage.setItem("myTaoAuthorization", token.xiaohong);
    }
    if (e.target.value === "xiaozhang") {
      localStorage.setItem("myTaoAuthorization", token.xiaozhang);
    } else if (e.target.value === "xiaowang") {
      localStorage.setItem("myTaoAuthorization", token.xiaowang);
    }
  };
  render() {
    return (
      <div>
        <div style={{ border: "1px solid #e7eaec" }}>
          {/* <Switch>
            <Route
              path={`${this.props.match.path}/taskList`}
              component={TaskList}
            />
            <Route
              path={`${this.props.match.path}/taskHandle/:processInstanceId`}
              component={TaskHandle}
            />
            <Redirect from="/" to="/home/task/taskList" />
          </Switch> */}
          <Radio.Group onChange={this.handleSizeChange}>
            <Radio.Button value="xiaoming">小明</Radio.Button>
            <Radio.Button value="xiaohong">小红</Radio.Button>
            <Radio.Button value="xiaozhang">小张</Radio.Button>
            <Radio.Button value="xiaowang">小王</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  }
}

export default SwitchUser;
