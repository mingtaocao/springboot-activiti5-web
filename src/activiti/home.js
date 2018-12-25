import { Layout, Menu, Icon, Button, Radio } from "antd";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";
import Definition from "./definition/definition";
import Example from "./example/example";
import Task from "./task/task";
import PropTypes from "prop-types";
import MyProcess from "./my-process/my-pricess";
const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props, context) {
    super(props, context);
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  /**路由跳转 */
  switch = path => {
    this.context.router.history.push({
      pathname: `${this.props.match.path}/${path}`
    });
  };

  /**切换用户 */
  handleUserChange = e => {
    let token = {
      xiaoming:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ1NjM5ODMyMDQ4LCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjoxfQ.VTRL88BtPSuGJzM6hEi_v1mt2krG1Sd2mLbdVlLlgkU",
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
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            <Menu.Item key="0" onClick={this.switch.bind(this, "definition")}>
              <Icon type="user" />
              <span>模型管理</span>
            </Menu.Item>
            <Menu.Item key="1" onClick={this.switch.bind(this, "example")}>
              <Icon type="video-camera" />
              <span>流程管理</span>
            </Menu.Item>
            <Menu.Item key="2" onClick={this.switch.bind(this, "task")}>
              <Icon type="upload" />
              <span>任务管理</span>
            </Menu.Item>
            <Menu.Item key="3" onClick={this.switch.bind(this, "myProcess")}>
              <Icon type="upload" />
              <span>我的流程</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <div style={{ float: "right" }}>
              <Radio.Group onChange={this.handleUserChange} buttonStyle="solid">
                <Radio.Button value="xiaoming">小明</Radio.Button>
                <Radio.Button value="xiaohong">小红</Radio.Button>
                <Radio.Button value="xiaozhang">小张</Radio.Button>
                <Radio.Button value="xiaowang">小王</Radio.Button>
              </Radio.Group>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              background: "#fff",
              minHeight: 280
            }}
          >
            <Switch>
              <Route
                path={`${this.props.match.path}/definition`}
                component={Definition}
              />
              <Route
                path={`${this.props.match.path}/example`}
                component={Example}
              />
              <Route path={`${this.props.match.path}/task`} component={Task} />
              <Route
                path={`${this.props.match.path}/myProcess`}
                component={MyProcess}
              />
              <Redirect from="/" to="/home/definition" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default Home;
