import React from 'react'
import PropTypes from 'prop-types'
import {
  Button, Modal, Form, Input, Radio,
} from 'antd';


const CollectionCreateForm = Form.create()(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {
        visible, onCancel, onCreate, form,
      } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="新增流程模型 :"
          okText="创 建"
          cancelText="取 消"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="名称">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入模型名称!' }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="描述">
              {getFieldDecorator('description', {
                rules: [{ required: true, message: '请输入模型描述!' }],
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item label="类别">
              {getFieldDecorator('category', {
                rules: [{ required: true, message: '请输入模型类别!' }],
              })(<Input type="textarea" />)}
            </Form.Item>
          </Form>
        </Modal>
      );
    }
  }
);
class ModelForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  componentDidMount() {
    this.props.myModal(this);
  }
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }

  handleCreate = () => {
    const form = this.formRef.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }

      // 提交后 发起 http请求 跳转到创建model页面

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });

      this.context.router.history.push({
        pathname: `/home/definition/add`,state:{name:values.name,description:values.description,category:values.category}
      });
      console.log(11)
    });
  }

  // toCreateModel() {
  //   this.context.router.history.push({
  //     pathname: `/home/definition/add`,state:{name:values.name,description:values.description,category:values.category}
  //   });
  // }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    return (
      <div>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    );
  }
}

export default ModelForm
