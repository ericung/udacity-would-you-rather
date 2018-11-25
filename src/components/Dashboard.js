import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    const divStyle = {
      width: '50%',
      height: '50%',
      margin: 'auto',
    };
    return (
      <div style={divStyle}>
        <h1>Dashboard</h1>
      </div>
    )
  }
}

export default Dashboard