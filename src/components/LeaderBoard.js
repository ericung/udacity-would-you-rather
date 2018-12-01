import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

class LeaderBoard extends Component {
  render() {
    const { scores } = this.props;

    return (
      <div className="default">
        <h1>Leader Board</h1>
        {
          scores.map((user) => {
            return <User user={user} key={user.id} />
          })
        }
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  var usersID = Object.keys(users);

  var scores= [];

  usersID.forEach((id) => {
    var user = users[id];
    var answeredScore = Object.keys(user.answers).length;
    var totalScore = answeredScore + user.questions.length;
    scores.push({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      score: totalScore,
      answeredScore: answeredScore,
      askedScore: user.questions.length
    });
  });

  scores.sort((a, b) => {
    return b.score - a.score;
  })

  return {
    scores,
  };
}

export default connect(mapStateToProps)(LeaderBoard)