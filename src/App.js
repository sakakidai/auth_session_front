import { Route, Routes } from 'react-router-dom'

import Home from 'components/pages/Home'
import Dashboard from 'components/pages/Dashboard'
import SignUp from 'components/pages/SignUp'
import SignIn from 'components/pages/SignIn'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
