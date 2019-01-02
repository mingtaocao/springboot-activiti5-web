/**
 * 已部署流程列表
 *
 *  @Author: caomt
 * @Date: 2018-12-25 09:56:15
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-28 15:29:53
 */
import React from "react";
import { Divider, Table, Popconfirm, message } from "antd";

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
        message.error("加载失败!");
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
            <a href="javascript:;" onClick={this.viewImg.bind(this, record.deploymentId)}>
              流程图
            </a>
            <Divider type="vertical" />
            <Popconfirm
              title="确定要删除此实例吗?"
              onConfirm={this.delete.bind(this, record.deploymentId)}
              onCancel={this.cancel}
              okText="Yes"
              cancelText="No"
            >
              <a href="#">删除</a>
            </Popconfirm>
          </div>
        );
      }
    }
  ];

  /**启动流程 */
  start(key) {
    this.child.showModal(key);
  }
  /**通过部署id 查看流程图 */
  viewImg(deploymentId) {
    console.log(deploymentId);
    this.context.router.history.push(
      `/home/example/viewImg/${deploymentId}`
    );

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
        message.success("删除成功!");
        this.queryList();
      } else {
        message.error("删除失败!");
      }
    });
  }
  cancel(e) { }
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
