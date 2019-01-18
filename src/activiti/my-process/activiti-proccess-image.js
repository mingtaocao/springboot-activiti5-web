import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ActivitiProcessImg extends Component {
  static propTypes = {

  }
  constructor(props,context){

    super(props, context);
    let baseUrl ="http://192.168.7.5:8081/service/myTask/getActivitiProcessImage?pProcessInstanceId="

    this.state = {
      pProcessInstanceId: props.msg,
      data: null,
      displayName: "none",
      url: baseUrl+props.msg
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.url} />
      </div>
    )
  }
}

export default ActivitiProcessImg
