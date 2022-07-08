// The thunk middleware was automatically added
import { configureStore } from '@reduxjs/toolkit'
import { UsersReducer } from 'reducks/users/reducers'
import qiitaReducer from 'features/qiitaSlice'

// automatically combineReducers
const store = configureStore({
  reducer: {
    users: UsersReducer,
    qiita: qiitaReducer,
  },
})

export default store
