/**
 * 查询流程历史审批记录
 *
 * @Author: caomt
 * @Date: 2018-12-25 10:01:35
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-26 17:24:09
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
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
