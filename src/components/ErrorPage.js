import React, { Component } from 'react'

class ErrorPage extends Component {
  render() {
    return (
      <div className="default">
        <h4>Error 404</h4>
        <hr />
        <p>
          <b>The page does not exist.</b> 
        </p>
      </div>
    )
  }
}


export default ErrorPage