// The thunk middleware was automatically added
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { UsersReducer } from 'reducks/users/reducers'
import qiitaReducer from 'reducks/store/qiitaSlice'

const store = configureStore({
  reducer: combineReducers({ users: UsersReducer, qiita: qiitaReducer }),
})

export default store
