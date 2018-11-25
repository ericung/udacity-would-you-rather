import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leader' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
        <li>
          <NavLink to='/login' activeClassName='active'>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  )
} 