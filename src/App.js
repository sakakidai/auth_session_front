import React, { useState } from 'react'
import axios from 'lib/axios'

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
    <div className="App">
      <div>
        <button onClick={handleClick}>Request Welcome API</button>
      </div>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  )
}

export default App
