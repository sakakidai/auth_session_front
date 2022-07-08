import { createSlice } from '@reduxjs/toolkit'
import { getItems } from 'api/qiitaApi'

// Thunk
export const fetchItems = () => async (dispatch) => {
  try {
    dispatch(fetchStart())
    dispatch(fetchSuccess(await getItems()))
  } catch (error) {
    dispatch(fetchFailure(error.message))
  }
}

// Slice
export const qiitaSlice = createSlice({
  name: 'qiita',
  // stateの初期値を設定
  initialState: { loading: false, error: null, items: [] },
  reducers: {
    // 通信を開始した時に呼ぶ関数
    fetchStart(state, action) {
      state.loading = true
      state.error = null
    },
    // 通信が失敗した時に呼ぶ関数
    fetchFailure(state, action) {
      state.loading = false
      state.error = action.payload
    },
    // 通信が成功した時に呼ぶ関数
    fetchSuccess(state, action) {
      state.loading = false
      state.error = null
      state.items = action.payload
    },
  },
})

// Actions
export const { fetchStart, fetchFailure, fetchSuccess } = qiitaSlice.actions

// Selectors
export const selectQiita = ({ qiita }) => qiita

// Reducer(must be default export)
export default qiitaSlice.reducer
