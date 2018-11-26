import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer, handleGetData } from '../actions/shared'

class QuestionVote extends Component {
  state = {
    option: ""
  }
  handleOptionChange = (value) => {
    this.setState({
      option: value
    })
  }
  handleOnSubmit = () => {
    if (this.state.option !== "" && this.props.authedUser !== null && this.props.id !== undefined) {
      let authedUser = this.props.authedUser;
      let id = this.props.question.id;
      let option = this.state.option;
      this.props.dispatch(handleSaveQuestionAnswer({ authedUser: authedUser, qid: id, answer: option }));
      this.props.dispatch(handleGetData());
    }
    return false;
  }
  render() {
    const { question } = this.props;
    const { optionOne, optionTwo } = question;

    return (
      <div>
        <h4>Would you rather?</h4>
        <form>
          <div className="radio">
            <label>
              <input name="choice" type="radio" value="optionOne" onChange={(event) => this.handleOptionChange(event.target.value)}/>{optionOne.text}
            </label>
          </div>
          <div className="radio">
            <label>
              <input name="choice" type="radio" value="optionTwo" onChange={(event) => this.handleOptionChange(event.target.value)}/>{optionTwo.text}
            </label>
          </div>
          <button type="button" onClick={(event) => this.handleOnSubmit(event)}> Submit</button>
        </form>
      </div>
    )
  }
}


function mapStateToProps({ authedUser, questions }, { id }) {
  const question = questions[id];

  if (question === null || question === undefined) {
    return {};
  }

  return {
    authedUser,
    question,
  };
}

export default connect(mapStateToProps)(QuestionVote)