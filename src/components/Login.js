import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { users, usersID } = this.props;
    return(
      <div>
        <ul>
          {usersID.map((user) => (
            <li key={users[user].name}>
              {users[user].name}
            </li>  
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  const usersID = Object.keys(users);
  return {
    users,
    usersID
  }
}

export default connect(mapStateToProps)(Login)