import { getUsers } from '../utils/api'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function getInitialUsers() {
  return (dispatch) => {
    return getUsers()
      .then(({ users }) => {
        dispatch(receiveUsers(users))
      })
  }
}

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
} 