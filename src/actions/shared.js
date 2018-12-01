import { getInitialData, getUsers, saveQuestionAnswer } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions, cleanQuestions } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading'
import { setAuthedUser } from './authedUser';

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users));
        dispatch(hideLoading());
      })
  }
} 

export function handleGetData() {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      });
  }
}

export function handleSaveQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(hideLoading());
      });
  }
}

export function handleLogin(id) {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveQuestions(questions));
        dispatch(setAuthedUser(id));
        dispatch(receiveUsers(users));
      });
  }
}

export function handleLogOut() {
  return (dispatch) => {
    dispatch(setAuthedUser(null));
    dispatch(cleanQuestions());
  }
}