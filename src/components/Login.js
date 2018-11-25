import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    selectedUser: ""
  }
  loginUser = () => {
      this.props.dispatch(setAuthedUser(this.state.selectedUser));
    }
  selectUser = (event) => {
    var id = event.target.value;
    this.setState(() => ({
      selectedUser: id
    }));
  }
  render() {
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

function mapStateToProps({ users }) {
  const usersID = Object.keys(users);
  return {
    users,
    usersID
  }
}

export default connect(mapStateToProps)(Login)