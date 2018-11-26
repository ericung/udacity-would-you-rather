import React, { Component } from 'react'
import { connect } from 'react-redux';

class QuestionVote extends Component {
  render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;

    return (
      <div>
        <h4>Would you rather?</h4>
        <p>{optionOne.text}</p>
        <p>{optionTwo.text}</p>
      </div>
    )
  }
}


function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  if (question === null || question === undefined) {
    return {};
  }

  return {
    question,
  };
}

export default connect(mapStateToProps)(QuestionVote)