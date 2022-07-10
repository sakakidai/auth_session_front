// The thunk middleware was automatically added
import { configureStore } from '@reduxjs/toolkit'
import qiitaReducer from 'features/qiitaSlice'
import userReducer from 'features/userSlice'

// automatically combineReducers
const store = configureStore({
  reducer: {
    user: userReducer,
    qiita: qiitaReducer,
  },
})

export default store
