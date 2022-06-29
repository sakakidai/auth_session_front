import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'lib/axios'

import Home from 'components/pages/Home'
import Dashboard from 'components/pages/Dashboard'
import SignUp from 'components/pages/SignUp'

const App = () => {
  const [messages, setMessages] = useState([])

  const handleClick = async (event) => {
    const response = await axios.get('/api/v1/welcome')
    const newMessage = response.data
    setMessages((prevState) => {
      return [newMessage, ...prevState]
    })
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Request Welcome API</button>
      </div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
