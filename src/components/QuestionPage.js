import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import QuestionResult from './QuestionResult'
import QuestionVote from './QuestionVote'

class QuestionPage extends Component {
  render() {
    const { user, question, answer } = this.props;

    if (question === null || question === undefined) {
      return <Redirect to='/error' />
    }

    const { id } = question;
    const { name, avatarURL } = user;

    return (
      <div id={id} className="default">
        <img src={avatarURL} alt="avatar" height="50" width="50"/>
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
    return { authedUser };
  }

  const answer = users[authedUser].answers[id];
  const user = users[question.author];

  return {
    user,
    question,
    answer, 
  };
}

export default connect(mapStateToProps)(QuestionPage)