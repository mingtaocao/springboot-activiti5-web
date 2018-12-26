/**
 * 用户启动的流程列表
 *
 * @Author: caomt
 * @Date: 2018-12-25 10:00:15
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-26 14:16:57
 */
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Divider, Table } from "antd";
import HttpUtils from "../../http/HttpUtils";
class MyStartProcessList extends Component {
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

  /**查询用户启动的流程 列表 */
  queryList() {
    HttpUtils.get("/service/task/myStartProcess", null).then(res => {
      if (res["code"] === 0) {
        this.setState({ data: res.data });
      } else {
        alert("XX");
      }
    });
  }

  columns = [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
      sorter: (a, b) => a.id - b.id
    },
    {
      title: "流程节点名",
      key: "name",
      dataIndex: "name"
    },
    {
      title: "发起人",
      key: "startUserId",
      dataIndex: "startUserId"
    },
    {
      title: "开始时间",
      key: "startTime",
      dataIndex: "startTime"
    },
    {
      title: "结束时间",
      key: "endTime",
      dataIndex: "endTime"
    },
    {
      title: "流程状态",
      key: "state",
      dataIndex: "state"
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <a href="javascript:;" onClick={this.seeHis.bind(this, record.id)}>
              查看处理信息
            </a>
            <Divider type="vertical" />
            <a href="javascript:;">查看流程图</a>
          </div>
        );
      }
    }
  ];

  /**用户启动流程的 审批历史 */
  seeHis(processInstanceId) {
    this.context.router.history.push(
      `/home/myProcess/detail/${processInstanceId}`
    );
  }

  /**
   * 调用子组件方法
   */
  myModal = ref => {
    this.child = ref;
  };

  onChange(pagination, filters, sorter) {
    // console.log("params", pagination, filters, sorter);
  }
  render() {
    return (
      <div style={{ padding: "10px" }}>
        {this.state.data ? (
          <Table
            rowKey={record => record.uid}
            columns={this.columns}
            dataSource={this.state.data}
            onChange={this.onChange}
          />
        ) : null}
      </div>
    );
  }
}

export default MyStartProcessList;
