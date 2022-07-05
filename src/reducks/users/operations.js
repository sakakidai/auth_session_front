import axios from 'lib/axios'
import { signInAction } from 'reducks/users/actions'

export const signIn = () => {
  return async (dispatch, getState) => {
    const state = getState()
    const isSignedIn = state.users.isSignedIn
    console.log(isSignedIn)

    if (!isSignedIn) {
      const response = await axios.get('/api/v1/users')
      const message = response.data.message

      dispatch(
        signInAction({
          isSignedIn: true,
          uid: '00001',
          username: message,
        }),
      )
    }
  }
}
