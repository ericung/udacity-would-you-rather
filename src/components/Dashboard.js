import React, { Component } from 'react';
import { connect } from 'react-redux';

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

function mapStateToProps({ users, questions }) {
  const usersID = Object.keys(users);
  const questionsID = Object.keys(questions);
  return {
    users,
    usersID,
    questions,
    questionsID,
  }
}

export default connect(mapStateToProps)(Dashboard)