/**
 * 流程办理页面: 流程历史展示
 *
 * @Author: caomt
 * @Date: 2018-12-25 09:43:09
 * @Last Modified by: caomt
 * @Last Modified time: 2019-01-16 11:33:19
 */
import React, { Component } from "react";
import { Button, Input, Table, message } from "antd";
import HttpUtils from "../../http/HttpUtils";

const { TextArea } = Input;
class TaskHandle extends Component {
  static propTypes = {};

  constructor(props, context) {
    super(props, context);

    this.state = {
      processInstanceId: props.match.params.processInstanceId,
      handlingOpinions: null,
      data: null
    };
    this.handle = this.handle.bind(this);
    this.testAreaChange = this.testAreaChange.bind(this);

    this.queryList();
  }

  //查询流程历史信息
  queryTaskInfoById(id) { }

  //根据 processInstanceId  处理流程节点
  handle() {
    console.log(this.state.processInstanceId)
    //如果审批意见为空  ,则提示输入审批意见
    if (this.state.handlingOpinions === null || this.state.handlingOpinions.trim() === "") {
      message.destroy();
      message.error("请输入审批意见!");
      return;
    } else {
      HttpUtils.get(`/service/myTask/taskHandle?processInstanceId=`
        + `${this.state.processInstanceId}&handlingOpinions=${this.state.handlingOpinions}`,
        null
      ).then(res => {
        if (res["code"] === 0) {
          message.success("处理成功!");
          //刷新页面信息
          this.queryList();
        } else {
          message.error("处理失败!");
        }
      });
    }
  }

  testAreaChange = e => {
    this.setState({
      handlingOpinions: e.target.value
    });
  };

  columns = [
    {
      title: "任务编号",
      key: "taskId",
      dataIndex: "taskId"
    },
    {
      title: "任务名称",
      key: "name",
      dataIndex: "name"
    },
    {
      title: "处理人",
      key: "assignee",
      dataIndex: "assignee"
    },
    {
      title: "处理意见",
      key: "comment",
      dataIndex: "comment"
    },
    {
      title: "结束时间",
      key: "endTime",
      dataIndex: "endTime"
    }
  ];
  /**根据流程id   查询流程历史审批记录 */
  queryList() {
    HttpUtils.get(
      `/service/myTask/queryHistoricTask?id=${this.state.processInstanceId}`,
      null
    ).then(res => {
      if (res["code"] === 0) {
        this.setState({ data: res.data });
      } else {
        alert(res["message"]);
      }
    });
  }
  render() {
    return (
      <div>
        <div style={{ width: "300px" }}>
          <TextArea rows={4} onChange={this.testAreaChange} />
        </div>
        <div style={{ minHeight: "50px", marginTop: "30px" }}>
          <Button
            type="primary"
            icon="check-circle"
            onClick={this.handle}
            style={{ marginLeft: "10px" }}
          >
            同意
          </Button>
          <Button icon="close-circle" style={{ marginLeft: "10px" }} disabled>
            不同意
          </Button>
        </div>
        <div style={{ marginTop: "10px", borderBottom: "1px solid #e7eaec" }}>
          历史记录:
        </div>
        <div>
          <div style={{ padding: "10px" }}>
            {this.state.data ? (
              <Table
                columns={this.columns}
                dataSource={this.state.data}
                onChange={this.onChange}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default TaskHandle;
