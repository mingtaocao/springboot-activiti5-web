import React from 'react'
import PropTypes from 'prop-types'
class ProcessImg extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <img src="http://192.168.7.5:8081/service/viewImage?deploymentId=50016" />
      </div>
    )
  }
}

export default ProcessImg
