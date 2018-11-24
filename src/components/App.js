import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/App.css';
import { getInitialUsers } from '../actions/users.js';
import { handleInitialData } from '../actions/shared.js';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialUsers())
    const { users } = this.props;
    console.log(users);
    // this.props.dispatch(handleInitialData())
    /*
    const { users } = this.props
    console.log(users);
    */
  }
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
  }
}

export default connect(mapStateToProps)(App) 