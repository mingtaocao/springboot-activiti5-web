/**
 * 流程办理页面: 流程历史展示
 * 
 * @Author: caomt
 * @Date: 2018-12-25 09:43:09
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-25 10:01:59
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import HttpUtils from "../../http/HttpUtils";
class TaskHandle extends Component {
  static propTypes = {};
  constructor(props, context) {
    super(props, context);
    this.state = {
      processInstanceId: props.match.params.processInstanceId
    };
    this.handle = this.handle.bind(this);
  }

  //查询流程历史信息
  queryTaskInfoById(id) {}

  //根据 processInstanceId  处理流程节点
  handle() {
    HttpUtils.get(
      `/service/myTask/taskHandle?processInstanceId=${
        this.state.processInstanceId
      }`,
      null
    ).then(res => {
      if (res["code"] === 0) {
        alert("处理成功");
      } else {
        alert("处理失败");
      }
    });
  }
  render() {
    return (
      <div>
        TaskHandle
        <div>
          <Button type="primary" onClick={this.handle}>
            同意
          </Button>
          <Button disabled>不同意</Button>
        </div>
      </div>
    );
  }
}

export default TaskHandle;
