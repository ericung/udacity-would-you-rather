import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  render() {
    const { user } = this.props;
    return (
      <div id={user.id} className="dashboardentry">
        <p>
          <img src={user.avatarURL} alt="avatar" height="50" width="50" />
        </p>
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

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User