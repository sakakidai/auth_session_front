import axios from 'axios'

export default axios.create({
  baseURL: process.env.API_ORIGIN || 'http://localhost:3000',
})
