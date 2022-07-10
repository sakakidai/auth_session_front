import axios from 'lib/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// ユーザ新規登録
export const userRegister = createAsyncThunk(
  'user/userRegister',
  async ({ username, email, password, passwordConfirmation }, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/signup', {
        user: {
          name: username,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation,
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data)
    }
  },
)

const userInitialState = {
  name: '',
  email: '',
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  errors: {},
  flashMessage: '',
}

// Slice
export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    clearErrors: (state) => {
      state.isError = false
      state.errors = {}
      state.flashMessage = ''
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isError = false
      state.isAuthenticated = true
      state.email = payload.user.email
      state.name = payload.user.name
      state.flashMessage = payload.message
    })
    builder.addCase(userRegister.pending, (state, { payload }) => {
      state.isLoading = true
    })
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      console.log(payload)
      state.isLoading = false
      state.isError = true
      state.errors = { ...payload.errors }
      state.flashMessage = payload.message
    })
  },
})

// Actions
export const { clearErrors } = userSlice.actions

// Selectors
export const userSelector = (state) => state.user

// Reducer
export default userSlice.reducer
