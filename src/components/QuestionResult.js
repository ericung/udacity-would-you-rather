import React, { Component } from 'react'
import { connect } from 'react-redux';

const OPTION_ONE = "optionOne";
const OPTION_TWO = "optionTwo";

class QuestionResult extends Component {
  render() {
    const { question, answer, optionOneVotes, optionTwoVotes } = this.props;

    const { optionOne, optionTwo } = question;

    const answerOptionOne = (answer === OPTION_ONE)
    const answerOptionTwo = (answer === OPTION_TWO)

    return (
      <div>
        <h4>Results</h4>
        <div>
          <p>{answerOptionOne ? (<b>{optionOne.text}</b>) : optionOne.text}</p>
          <p>{optionOneVotes}</p>
        </div>
        <div>
          <p>{answerOptionTwo ? (<b>{optionTwo.text}</b>) : optionTwo.text}</p>
          <p>{optionTwoVotes}</p>
        </div>
      </div>
    )
  }
}


function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  if (question === null || question === undefined) {
    return {};
  }

  const answer = users[authedUser].answers[id];

  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;

  return {
    question,
    answer,
    optionOneVotes,
    optionTwoVotes,
  };
}

export default connect(mapStateToProps)(QuestionResult)