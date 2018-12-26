/**
 * 已部署流程列表
 *
 *  @Author: caomt
 * @Date: 2018-12-25 09:56:15
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-26 14:12:55
 */
import React from "react";
import { Divider, Table } from "antd";
import HttpUtils from "../../http/HttpUtils";
import PropTypes from "prop-types";
import MyModal from "../util/modal";
class expList extends React.Component {
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

  /**查询部署的流程 */
  queryList() {
    HttpUtils.get("/service/task/queryProcess", null).then(res => {
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
      title: "流程名称",
      key: "name",
      dataIndex: "name"
    },
    {
      title: "部署编号",
      key: "deploymentId",
      dataIndex: "deploymentId"
    },
    {
      title: "KEY",
      key: "key",
      dataIndex: "key"
    },
    {
      title: "版本",
      key: "version",
      dataIndex: "version"
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <a href="javascript:;" onClick={this.start.bind(this, record.key)}>
              启动
            </a>
            <Divider type="vertical" />
            <a href="javascript:;">查看实例</a>
            <Divider type="vertical" />
            <a
              href="javascript:;"
              onClick={this.delete.bind(this, record.deploymentId)}
            >
              Delete
            </a>
          </div>
        );
      }
    }
  ];

  /**启动流程 */
  start(key) {
    this.child.showModal(key);
  }

  /**
   * 调用子组件方法
   */
  myModal = ref => {
    this.child = ref;
  };

  /**删除流程 */
  delete(event) {
    HttpUtils.get(
      "/service/task/deleteDeployment?deploymentId=" + event,
      null
    ).then(res => {
      if (res["code"] === 0) {
        this.queryList();
      }
    });
  }
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

export default expList;
