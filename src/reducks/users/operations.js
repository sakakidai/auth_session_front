import axios from 'lib/axios'
import { signInAction } from 'reducks/users/actions'

const errorMessages = ({ ...args }) => {
  return { ...args }
}
errorMessages.prototype = Error.prototype

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

export const signUp = (name, email, password, passwordConfirmation) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('/api/v1/signup', {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
      })
      console.log(response.status)
      console.log(response.data)
    } catch (error) {
      console.log(error)
      const axiosError = error.response
      throw errorMessages({ ...axiosError.data.errors })
    }
  }
}
