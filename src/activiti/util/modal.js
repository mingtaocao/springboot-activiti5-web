/**
 * 启动流程时 弹出的模态框
 * 
 * @Author: caomt
 * @Date: 2018-12-25 10:02:38
 * @Last Modified by: caomt
 * @Last Modified time: 2018-12-25 10:03:07
 */
import React, { Component } from "react";
import PropTypes from "prop-types";

import { Modal, Button } from "antd";
import HttpUtils from "../../http/HttpUtils";
class MyModal extends Component {
  componentDidMount() {
    this.props.myModal(this);
  }

  state = {
    ModalText: "请求内容",
    visible: false,
    confirmLoading: false,
    //请求的参数
    key: null
  };

  /**http 请求 */
  httpGet() {
    HttpUtils.get(
      "/service/task/startProcess?keyName=" + this.state.key,
      null
    ).then(res => {
      if (res["code"] === 0) {
        this.setState.processData = res["data"];
        this.setState({
          visible: false,
          confirmLoading: false
        });
      }
    });
  }
  showModal = value => {
    this.setState({
      visible: true,
      key: value
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "value",
      confirmLoading: true
    });

    /**http请求 */
    this.httpGet();
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}

export default MyModal;
