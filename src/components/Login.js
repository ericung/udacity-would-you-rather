import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
  render() {
    const { users, usersID } = this.props;
    const divStyle = {
        width: '50%',
        height: '50%',
        margin: 'auto',
      };
    return(
      <div style={divStyle}>
        <h>Login</h>
        <p>
        <select>
          <option value="" disabled selected>Select your option</option>
            {usersID.map((user) => (
              <option key={users[user].name}>
                {users[user].name}
              </option>  
            ))}
          </select>
        </p>
        <p>
          <input id="password" placeholder="Enter Password" />
        </p>
        <p>
          <button type="submit">Submit</button>
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