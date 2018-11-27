import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const CLEAN_QUESTIONS = 'CLEAN_QUESTIONS'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function cleanQuestions() {
  return {
    type: CLEAN_QUESTIONS,
    questions: {},
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

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());
    return saveQuestion(question)
      .then(() => {
        dispatch(hideLoading());
      });
  }
}