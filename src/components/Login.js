import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { handleLoginData } from '../actions/shared';

class Login extends Component {
  state = {
    selectedUser: "",
    toDashboard: false
  }
  loginUser = () => {
    // dispatch the authorized user, implemented so that there could be a password
    this.props.dispatch(setAuthedUser(this.state.selectedUser));
    // load data before changing pages if successful authentication
    this.props.dispatch(handleLoginData());
    this.setState(() => ({
      toDashboard: true
    }));
    }
  selectUser = (event) => {
    var id = event.target.value;
    this.setState(() => ({
      selectedUser: id
    }));
  }
  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to='/' />
    }
    const { users, usersID } = this.props;
    const divStyle = {
        width: '50%',
        height: '50%',
        margin: 'auto',
      };
    return(
      <div style={divStyle}>
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

function mapStateToProps({ users, questions = {} }) {
  const usersID = Object.keys(users);
  return {
    users,
    usersID,
    questions,
  }
}

export default connect(mapStateToProps)(Login)