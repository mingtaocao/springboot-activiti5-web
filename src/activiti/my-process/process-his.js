/**
 * 查询流程历史审批记录
 *
 * @Author: caomt
 * @Date: 2018-12-25 10:01:35
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-25 17:55:08
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import {Table } from "antd";
import HttpUtils from "../../http/HttpUtils";
class ProcessHis extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      id: props.match.params.id,
      data: null
    };
    this.queryList();
  }
  /**根据流程id   查询流程历史审批记录 */
  queryList() {
    HttpUtils.get(
      `/service/myTask/queryHistoricTask?id=${this.state.id}`,
      null
    ).then(res => {
      if (res["code"] === 0) {
        this.setState({ data: res.data });
      } else {
        alert("XX");
      }
    });
  }

  columns = [
    {
      title: "节点id",
      dataIndex: "taskId",
      sorter: (a, b) => a.taskId - b.taskId
    },
    {
      title: "节点名称",
      dataIndex: "name"
    },
    {
      title: "实例id",
      dataIndex: "processInstanceId"
    },
    {
      title: "处理人id",
      dataIndex: "assignee"
    },
    {
      title: "结束时间",
      dataIndex: "endTime"
    }
  ];
  render() {
    return (
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
    );
  }
}

export default ProcessHis;
