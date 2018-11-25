import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Question from './Question';

class Dashboard extends Component {

  render() {
    const { authedUser, questionsID } = this.props;

    if (authedUser === null) {
      return <Redirect to='/login'/>
    };

    const divStyle = {
      width: '50%',
      height: '50%',
      margin: 'auto',
    };
    return (
      <div style={divStyle}>
        <h1>Dashboard</h1>
        {questionsID.map((id) => (
          <Question id={id} key={id}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ authedUser, questions }) {
  var questionsID = Object.keys(questions);

  questionsID.sort((a, b) => {
    var aTime = questions[a].timestamp;
    var bTime = questions[b].timestamp;
    return bTime - aTime;
  })

  return {
    authedUser,
    questionsID
  }
}

export default connect(mapStateToProps)(Dashboard)