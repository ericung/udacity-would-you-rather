import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const OPTION_ONE = "optionOne";
const OPTION_TWO = "optionTwo";

class QuestionResult extends Component {
  render() {
    const { question, answer, optionOneVotes, optionTwoVotes, optionOnePercent, optionTwoPercent } = this.props;

    const { optionOne, optionTwo } = question;

    const answerOptionOne = (answer === OPTION_ONE)
    const answerOptionTwo = (answer === OPTION_TWO)

    return (
      <div>
        <h4>Results</h4>
        <div>
          <p>{answerOptionOne ? (<b>{optionOne.text}</b>) : optionOne.text}</p>
          <p>Votes: {optionOneVotes}</p>
          <p>Percent: {optionOnePercent}%</p>
        </div>
        <div>
          <p>{answerOptionTwo ? (<b>{optionTwo.text}</b>) : optionTwo.text}</p>
          <p>Votes: {optionTwoVotes}</p>
          <p>Percent: {optionTwoPercent}%</p>
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
  const sum = optionOneVotes + optionTwoVotes;
  const optionOnePercent = Math.round((optionOneVotes / sum)*100) ;
  const optionTwoPercent = Math.round((optionTwoVotes / sum)*100) ;

  return {
    question,
    answer,
    optionOneVotes,
    optionTwoVotes,
    optionOnePercent,
    optionTwoPercent
  };
}

QuestionResult.propTypes = {
  id: PropTypes.string.isRequired
}

export default connect(mapStateToProps)(QuestionResult)