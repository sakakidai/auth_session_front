import _axios from 'axios'

const axios = _axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
  withCredentials: true,
})

//リクエスト インターセプター
axios.interceptors.request.use((request) => {
  console.log('Starting Request: ', request)
  return request
})

//レスポンス インターセプター
axios.interceptors.response.use((response) => {
  console.log('Response: ', response)
  return response
})

export default axios
