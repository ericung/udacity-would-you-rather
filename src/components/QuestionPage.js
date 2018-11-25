import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';

class QuestionPage extends Component {
  render() {
    const { authedUser, user, question } = this.props;

    if (authedUser === null || authedUser === undefined) {
      return <Redirect to='/login' />
    } else {
      console.log("let's ignore authedUser: " + authedUser);
    };

    const { optionOne, optionTwo, id } = question || { optionOne: "", optionTwo: "", id: "" };
    const { name } = user || { name: "" }

    return (
      <div id={id} className="default">
        <h3>{name} asks</h3>
        <hr />
        <h4>Would you rather?</h4>
        <p>{optionOne.text || ""}</p>
        <p>{optionTwo.text || "" }</p>
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
  const user = users[question.author];
  return {
    authedUser,
    user,
    question,
  };
}

export default connect(mapStateToProps)(QuestionPage)