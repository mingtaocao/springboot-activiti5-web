/**
 * 指派给我的任务列表
 *
 * @Author: caomt
 * @Date: 2018-12-25 09:39:45
 * @Last Modified by: caomt
 * @Last Modified time: 2019-01-04 17:50:06
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import HttpUtils from "../../http/HttpUtils";
import { Divider, Table } from "antd";
import MyModal from "../util/modal";

class TaskList extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: null
    };
    this.queryList();
  }

  /**我的待办任务列表 */
  queryList() {
    HttpUtils.get("/service/myTask/queryMyTask", null).then(res => {
      if (res["code"] === 0) {
        this.setState({ data: res.data });
      } else {
        alert(res["message"]);
      }
    });
  }

  columns = [
    {
      title: "编号",
      key: 'id',
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id
    },
    {
      title: "流程节点名",
      key: 'name',
      dataIndex: "name"
    },
    {
      title: "处理人",
      key: 'assignee',
      dataIndex: "assignee"
    },
    {
      title: "流程名称",
      key: 'processName',
      dataIndex: "processName"
    },
    {
      title: "操作",
      key: 'action',
      render: (text, record) => {
        return (
          <div>
            <a
              href="javascript:;"
              onClick={this.handle.bind(this, record.processInstanceId)}
            >
              处理
            </a>
            <Divider type="vertical" />
            <a href="javascript:;">历史信息</a>
          </div>
        );
      }
    }
  ];

  /**跳转流程办理页面 */
  handle(processInstanceId) {
    this.context.router.history.push(
      `/home/task/taskHandle/${processInstanceId}`
    );
  }

  /**
   * 调用子组件方法 :弹出模态框
   */
  myModal = ref => {
    this.child = ref;
  };

  onChange(pagination, filters, sorter) {
    // console.log("params", pagination, filters, sorter);
  }
  render() {
    return (
      <div>
        <MyModal myModal={this.myModal} />
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
    );
  }
}

export default TaskList;
