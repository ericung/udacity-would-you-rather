import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'
import Nav from './Nav';
import Login from './Login';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/new' component={NewQuestion} />
                <Route path='/leader' component={LeaderBoard} />
                <Route path='/login' component={Login} />
                <Route path='/logout' component={Login} />
              </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App) 