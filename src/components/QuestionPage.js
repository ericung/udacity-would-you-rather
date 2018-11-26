import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionResult from './QuestionResult'
import QuestionVote from './QuestionVote'

class QuestionPage extends Component {
  render() {
    const { authedUser, user, question, answer } = this.props;

    if (authedUser === null || authedUser === undefined) {
      return <Redirect to='/login' />
    } 

    const { id } = question;
    const { name } = user;

    return (
      <div id={id} className="default">
        <h3>{name} asks</h3>
        <hr />
        {(answer !== undefined) ?
          <QuestionResult id={id} />
          :
          <QuestionVote id={id} />
          }
      </div>
    )
  }
}


function mapStateToProps({ authedUser, users, questions}, props) {
  const { id } = props.match.params;
  const question = questions[id];

  if (question === null || question === undefined) {
    return {};
  }

  const answer = users[authedUser].answers[id];
  const user = users[question.author];

  return {
    authedUser,
    user,
    question,
    answer, 
  };
}

export default connect(mapStateToProps)(QuestionPage)