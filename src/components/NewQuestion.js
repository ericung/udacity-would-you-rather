import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/questions'
import { handleGetData } from '../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOneAnswer: "",
    optionTwoAnswer: "",
    redirect: false
  }
  handleOptionOneChange = (text) => {
    this.setState({
      optionOneAnswer: text
    })
  }
  handleOptionTwoChange = (text) => {
    this.setState({
      optionTwoAnswer: text
    })
  }
  handleOnSubmit = () => {
    let optionOneAnswer = this.state.optionOneAnswer;
    let optionTwoAnswer = this.state.optionTwoAnswer;
    let authedUser = this.props.authedUser;
    if (optionOneAnswer !== "" && optionTwoAnswer !== "") {
      this.props.dispatch(handleSaveQuestion({ optionOneText: optionOneAnswer, optionTwoText: optionTwoAnswer, author: authedUser }));
      this.props.dispatch(handleGetData());
    }
    this.setState({
      redirect: true
    })
  }
  renderRedirectToHome = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }
  render() {
    const { authedUser } = this.props;

    if (authedUser === null || authedUser === undefined) {
      return <Redirect to='/login' />
    }

    return (
      <div className="default">
        {this.renderRedirectToHome()}
        <h1>Create New Question</h1>
        <h5>Complete the question:</h5>
        <div>
          <h3>Would you rather...</h3>
          <form>
            <div>
              <label>
                <p>Option One:</p>
                <input
                  name="optionOne"
                  type="text"
                  size="75"
                  placeholder={this.state.optionOneAnswer}
                  onChange={(event) => this.handleOptionOneChange(event.target.value)} />
              </label>
            </div>
            <div>
              <label>
                <p>Option Two:</p>
                <input
                  name="optionTwo"
                  type="text"
                  size="75"
                  placeholder={this.state.optionTwoAnswer}
                  onChange={(event) => this.handleOptionTwoChange(event.target.value)} />
              </label>
            </div>
            <div>
              <p>
                <button type="button" onClick={this.handleOnSubmit}>Submit</button>
              </p>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion)