import * as Actions from 'reducks/users/actions'
import intiialState from 'reducks/store/initialState'

export const UsersReducer = (state = intiialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}
