/**
 * 左侧菜单
 *
 * @Author: caomt
 * @Date: 2018-12-25 09:52:11
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-27 16:47:47
 */
import React, { Component } from "react";
import { Tabs } from "antd";

const TabPane = Tabs.TabPane;
class Edit extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      modelId: props.match.params.modelId,
      createData: this.props.location.state,
      data: null,
      displayName: "none",
      url: null
    };

  }
  addOrEdit() {
    if (this.state.modelId) {
      this.setState({
        url:
          "http://localhost:8081/service/editModel/?modelId=" +
          this.state.modelId
      });
    } else if (this.state.createData) {
      this.setState({
        url: `http://localhost:8081/service/create` +
          `?name=${this.state.createData.name}&` +
          `description=${this.state.createData.description}&` +
          `category=${this.state.createData.category}`
      });
    }
  }

  componentDidMount() {
    this.addOrEdit();
  }
  callback(key) {
    console.log(key);
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="流程设计" key="1">
            {this.state.url ? (
              <iframe
                style={{ border: 0, width: "100%", height: 650 }}
                src={this.state.url}
              />
            ) : null}
          </TabPane>
          <TabPane tab="流程配置" key="2">
            流程配置
          </TabPane>
          <TabPane tab="变量管理" key="3">
            变量管理
          </TabPane>
          <TabPane tab="版本管理" key="4">
            版本管理
          </TabPane>
          <TabPane tab="其他设置" key="5">
            其他设置
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Edit;
