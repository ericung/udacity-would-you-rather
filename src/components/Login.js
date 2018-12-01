import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleLogin } from '../actions/shared';

class Login extends Component {
  state = {
    selectedUser: ""
  }
  loginUser = () => {
    if (this.state.selectedUser !== "") {
      this.props.dispatch(handleLogin(this.state.selectedUser));
      this.setState(() => ({
        toDashboard: true
      }));
    }
  }
  selectUser = (event) => {
    var id = event.target.value;
    this.setState(() => ({
      selectedUser: id
    }));
  }
  render() {
    const { authedUser, users, usersID } = this.props;

    if (authedUser !== null) {
      return <Redirect to='/' />
    }

    return (
      <div className="default">
        <h1>Login</h1>
        <p>
          <select id="selectedUser" value={this.state.selectedUser} onChange={event => this.selectUser(event)}>
            <option value="" disabled defaultValue>Select your option</option>
            {usersID.map((user) => (
              <option value={user} key={users[user].name}>
                {users[user].name}
              </option>  
            ))}
          </select>
        </p>
        <p>
          <button type="submit" onClick={this.loginUser}>Submit</button>
        </p>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  const usersID = Object.keys(users);
  return {
    authedUser,
    users,
    usersID,
  }
}

export default connect(mapStateToProps)(Login)