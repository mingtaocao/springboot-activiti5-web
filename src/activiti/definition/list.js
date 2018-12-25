import React, { Component } from "react";
import { Button, Radio, Icon, Divider, Table } from "antd";
import PropTypes from "prop-types";
import HttpUtils from "../../http/HttpUtils";

/**model 列表页 */
class List extends Component {
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
  /**btn点击 跳转*/
  handleChange = e => {
    this.setState({ size: e.target.value });
    this.context.router.history.push({
      pathname: `/home/definition/${e.target.value}`
    });
  };
  /**编辑流程 */
  deploy(event) {
    HttpUtils.get("/service/deploy?modelId=" + event, null).then(res => {
      if (res["code"] === 0) {
        // this.modellist();
      }
    });
  }
  /**model 编辑 */
  edit(event) {
    this.context.router.history.push(`/home/definition/edit/${event}`);
  }

  /**删除 model */
  delete(event) {
    HttpUtils.get("/service/deleteById?modelId=" + event, null).then(res => {
      if (res["code"] === 0) {
        this.queryList();
      }
    });
  }
  columns = [
    {
      title: "序号",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id
    },
    {
      title: "名称",
      dataIndex: "name"
    },
    {
      title: "流程key",
      dataIndex: "key"
    },
    {
      title: "创建时间",
      dataIndex: "createTime"
    },
    {
      title: "版本号",
      dataIndex: "version",
      sorter: (a, b) => a.version - b.version
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <a href="javascript:;" onClick={this.edit.bind(this, record.id)}>
              编辑
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.deploy.bind(this, record.id)}>
              部署
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={this.delete.bind(this, record.id)}>
              删除
            </a>
          </div>
        );
      }
    }
  ];

  /**查询 model 列表 */
  queryList() {
    HttpUtils.get("/service/modelList", null).then(res => {
      if (res["code"] === 0) {
        this.setState({ data: res.data });
      } else {
        alert("XX");
      }
    });
  }

  onChange(pagination, filters, sorter) {
    // console.log("params", pagination, filters, sorter);
  }
  render() {
    return (
      <div>
        <div style={{ borderBottom: "1px solid #e7eaec", padding: "10px" }}>
          <Radio.Group size="large" onChange={this.handleChange}>
            <Radio.Button icon="search" value="add">
              新增
            </Radio.Button>
            <Radio.Button value="del">删除</Radio.Button>
            <Radio.Button value="in">导入</Radio.Button>
            <Radio.Button value="out">导出</Radio.Button>
          </Radio.Group>
        </div>
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
export default List;

// const columns = [
//   {
//     title: "Name",
//     dataIndex: "name"
//     // specify the condition of filtering result
//     // here is that finding the name started with `value`
//     // onFilter: (value, record) => record.name.indexOf(value) === 0,
//     // sorter: (a, b) => a.name.length - b.name.length
//   },
//   {
//     title: "Age",
//     dataIndex: "age",
//     defaultSortOrder: "descend",
//     sorter: (a, b) => a.age - b.age
//   },
//   {
//     title: "Address",
//     dataIndex: "address",
//     filters: [
//       {
//         text: "London",
//         value: "London"
//       },
//       {
//         text: "New York",
//         value: "New York"
//       }
//     ],
//     filterMultiple: false,
//     onFilter: (value, record) => record.address.indexOf(value) === 0,
//     sorter: (a, b) => a.address.length - b.address.length
//   }
// ];

// const data = [
//   {
//     key: "1",
//     name: "John Brown",
//     age: 32,
//     address: "New York No. 1 Lake Park"
//   },
//   {
//     key: "2",
//     name: "Jim Green",
//     age: 42,
//     address: "London No. 1 Lake Park"
//   },
//   {
//     key: "3",
//     name: "Joe Black",
//     age: 32,
//     address: "Sidney No. 1 Lake Park"
//   },
//   {
//     key: "4",
//     name: "Jim Red",
//     age: 32,
//     address: "London No. 2 Lake Park"
//   }
// ];
