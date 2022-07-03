import axios from 'lib/axios'

const Dashboard = () => {
  const handleClick = async () => {
    try {
      const response = await axios.get('/api/v1/users')
      console.log(response.status)
      console.log(response.data)
    } catch (error) {
      const errorRescpnse = error.response
      console.log(errorRescpnse.data.errors)
    }
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleClick}>ダミーメッセージ取得</button>
    </div>
  )
}

export default Dashboard
