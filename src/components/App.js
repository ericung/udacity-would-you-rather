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
import QuestionPage from './QuestionPage';
import ErrorPage from './ErrorPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    if (this.props.authedUser === null || this.props.authedUser === undefined) {
      return (
        <Router>
          <div>
            <Nav/>
            <Login />
          </div>
        </Router>
      )
    }
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/add' component={NewQuestion} />
                <Route path='/leaderboard' component={LeaderBoard} />
                <Route path='/login' component={Login} />
                <Route path='/logout' component={Login} />
                <Route exact path='/question/:id' component={QuestionPage} />
                <Route path='/error' component={ErrorPage} />
              </div>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ authedUser }) {
    return {
    authedUser
  }
}

export default connect(mapStateToProps)(App) 