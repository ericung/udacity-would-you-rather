import React, { Component } from 'react';

class LeaderBoard extends Component {
  render() {
    const divStyle = {
      width: '50%',
      height: '50%',
      margin: 'auto',
    };
    return (
      <div style={divStyle}>
        <h1>Leader Board</h1>
      </div>
    )
  }
}

export default LeaderBoard