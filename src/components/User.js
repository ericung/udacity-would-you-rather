import React, { Component } from 'react'

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div id={user.id} className="dashboardentry">
        <h4>{user.name}</h4>
        <hr />
        <p>
          <b>Total</b> {user.score}
        </p>
        <p>
          <b>Answered</b> {user.answeredScore}
        </p>
        <p>
          <b>Asked</b> {user.askedScore}
        </p>
      </div>
    )
  }
}


export default User