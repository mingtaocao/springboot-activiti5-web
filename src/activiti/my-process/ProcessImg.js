import React from 'react'
import PropTypes from 'prop-types'
class ProcessImg extends React.Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <img src="http://localhost:8081/service/viewImage?deploymentId=50016" />
      </div>
    )
  }
}

export default ProcessImg
