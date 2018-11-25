import React, { Component } from 'react';

class NewQuestion extends Component {
  render() {
    const divStyle = {
      width: '50%',
      height: '50%',
      margin: 'auto',
    };
    return (
      <div style={divStyle}>
        <h1>New Question</h1>
      </div>
    )
  }
}

export default NewQuestion