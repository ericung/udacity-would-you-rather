import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { handleLogOut } from '../actions/shared'

class Nav extends Component {
  handleLogout = () => {
    this.props.dispatch(handleLogOut());
  }
  render() {
    const { authedUser } = this.props;
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Dashboard
          </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
          </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
          </NavLink>
          </li>
          <li>
          {(authedUser === null) ? (
              <NavLink to='/login' activeClassName='active'>
              Log In
            </NavLink> )
              : (
            <NavLink to='/logout' activeClassName='active' onClick={this.handleLogout} >
              Log Out
            </NavLink> 
            )
          }
          </li>
       </ul>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(Nav)