import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Question from './Question';

const UNANSWERED = "UNANSWERED";
const ANSWERED = "ANSWERED";

class Dashboard extends Component {
  state = {
    viewType: UNANSWERED
  }
  switchViewType = (newState) => {
    this.setState({
      viewType: newState
    })
  }
  render() {
    const { authedUser, unansweredQuestionsID, answeredQuestionsID, name } = this.props;

    if (authedUser === null || authedUser === undefined) {
      return <Redirect to='/login'/>
    };

    return (
      <div className="default">
        <h1>{name}'s Dashboard</h1>
        <nav className='nav'>
            <button className="btn" onClick={() => this.switchViewType(UNANSWERED)}>Unanswered</button>
            <button className="btn" onClick={() => this.switchViewType(ANSWERED)}>Answered</button>
        </nav>
        {this.state.viewType === UNANSWERED ?
            unansweredQuestionsID.map((id) => (
            <Question id={id} key={id} answered={false}/>
            ))
          :
            answeredQuestionsID.map((id) => (
            <Question id={id} key={id} answered={true}/>
            ))
          
        }
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  if (authedUser === null || authedUser === undefined) {
    return {};
  }

  const name = users[authedUser].name;

  var questionsID = Object.keys(questions);
  var unansweredQuestionsID = [];
  var answeredQuestionsID = [];
  var answers = users[authedUser].answers;

  questionsID.sort((a, b) => {
    var aTime = questions[a].timestamp;
    var bTime = questions[b].timestamp;
    return bTime - aTime;
  })

  questionsID.forEach((id) => {
    if (answers[id] === null || answers[id] === undefined) {
      unansweredQuestionsID.push(id);
    } else {
      answeredQuestionsID.push(id);
    }
  })

  return {
    authedUser,
    unansweredQuestionsID,
    answeredQuestionsID,
    name
  }
}

export default connect(mapStateToProps)(Dashboard)