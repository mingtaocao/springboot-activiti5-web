import { Layout, Menu, Icon, Radio, Breadcrumb } from "antd";
import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
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
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ4MTIyNDEwMDg3LCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjoxfQ._pDN2sWQUTO9tEg4OgrSu2rR7iCLezrPFohh3gz_Ov0",
      xiaohong:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ4MTIzMDUyOTk0LCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjoyfQ.5HaeVPpVAzaM0LsTKR4L__6tOA6LL2kij4IHjpKX4lw",
      xiaozhang:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ4MTIzMDk3ODAwLCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjozfQ.2e1TERRZTBLpmFJrIwX38up4zaShAuoiFPO2AzvZvCs",
      xiaowang:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjcmVhdGVUaW1lIjoxNTQ4MTIzMTIwNDYyLCJpc3MiOiJsdWN1bGVudEBhdXRvbWF0aW9uIiwidXNlcklkIjo0fQ.jd6j_JhJImBsU5T2s9-leFmFk5L146cM30Q5iNbwK6g"
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
            {/* <Breadcrumb separator=">">
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
              <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
              <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb> */}
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
