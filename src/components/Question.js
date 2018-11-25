import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Question extends Component {
  render() {
    const { user, question } = this.props;
    const { optionOne, optionTwo, id } = question;

    return (
      <Link to={`/question/${id}`} className="question">
        <div id={id} className="dashboardentry">
          <h4>{user.name} asks</h4>
          <hr />
          <h5>Would you rather?</h5>
          <p>{optionOne.text}</p>
          <p>{optionTwo.text}</p>
        </div>
      </Link>
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