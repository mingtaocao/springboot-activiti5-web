import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ViewImg extends Component {
  static propTypes = {

  }

  constructor(props,context){

    super(props, context);
    let baseUrl ="http://192.168.7.5:8081/service/viewImage?deploymentId="

    this.state = {
      deploymentId: props.match.params.deploymentId,
      data: null,
      displayName: "none",
      url: baseUrl+props.match.params.deploymentId
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

export default ViewImg
