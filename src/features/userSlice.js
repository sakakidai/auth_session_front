import axios from 'lib/axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

// ユーザ新規登録
export const userRegister = createAsyncThunk(
  'user/userRegister',
  async ({ username, email, password, passwordConfirmation }, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/auth/signup', {
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

// ユーザログイン
export const userLogin = createAsyncThunk(
  'user/userLogin',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/api/v1/auth/signin', {
        user: {
          email: email,
          password: password,
        },
      })
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data)
    }
  },
)

// ログアウト
export const userLogOut = createAsyncThunk('user/userLogOut', async (_, thunkAPI) => {
  try {
    const response = await axios.delete('/api/v1/auth/signout')
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

// 認証済みのユーザの取得
export const fetchCurrentUser = createAsyncThunk('user/fetchCurrentUser', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/api/v1/auth/sessions')
    return response.data
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data)
  }
})

const userInitialState = {
  name: '',
  email: '',
  isAuthenticated: false,
  isSubmitted: false,
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
      state.flashMessage = payload.message
      state.name = payload.user.name
      state.email = payload.user.email
    })
    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.errors = { ...payload.errors }
      state.flashMessage = payload.message
    })

    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isError = false
      state.isAuthenticated = true
      state.isSubmitted = true
      state.flashMessage = payload.message
      state.name = payload.user.name
      state.email = payload.user.email
    })
    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.errors = { message: payload.message }
    })

    builder.addCase(userLogOut.fulfilled, (state) => {
      state.isError = false
      state.errors = {}
      state.flashMessage = ''
      state.isLoading = false
      state.isAuthenticated = false
      state.isSubmitted = false
      state.name = ''
      state.email = ''
    })
    builder.addCase(userLogOut.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userLogOut.rejected, (state) => {
      state.isError = false
      state.errors = {}
      state.flashMessage = ''
      state.isLoading = false
      state.isAuthenticated = false
      state.isSubmitted = false
      state.name = ''
      state.email = ''
    })

    builder.addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.isAuthenticated = true
      state.name = payload.user.name
      state.email = payload.user.email
    })
    builder.addCase(fetchCurrentUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchCurrentUser.rejected, (state) => {
      state.isLoading = false
      state.isAuthenticated = false
    })
  },
})

// Actions
export const { clearErrors } = userSlice.actions

// Selectors
export const selectUser = (state) => state.user

// Reducer
export default userSlice.reducer
