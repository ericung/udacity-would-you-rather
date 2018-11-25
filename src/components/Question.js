import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Question extends Component {
  render() {
    const { user, question } = this.props;

    return (
      <div id={question.id} className="dashboardentry">
        <h4>{user.name} asks</h4>
        <hr />
        <h5>Would you rather?</h5>
        <p>{question.optionOne.text}</p>
        <p>{question.optionTwo.text}</p>
      </div>
    )
  }
}


function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    user,
    question,
  }
}
 
export default withRouter(connect(mapStateToProps)(Question))