import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { UsersReducer } from 'reducks/users/reducers'

const createStore = () => {
  return configureStore({ reducer: combineReducers({ users: UsersReducer }) })
}

const store = createStore()
export default store
