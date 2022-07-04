import { Route, Routes, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signInAction } from 'reducks/users/actions'
import { getUserId } from 'reducks/users/selectors'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import palette from 'components/themes/palette'

import Layout from 'components/layout/Layout'
import Home from 'components/pages/Home'
import Dashboard from 'components/pages/Dashboard'
import SignUp from 'components/pages/SignUp'
import SignIn from 'components/pages/SignIn'

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", sans-serif;
    color: ${palette.black};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1 {
    font-size: 2rem;
  }
`

const App = () => {
  const dispatch = useDispatch()
  const selector = useSelector((state) => state)
  const uid = getUserId(selector)
  const navigate = useNavigate()

  console.log(selector.users)
  console.log(uid)

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Layout>
      <button
        onClick={() => {
          dispatch(signInAction({ uid: '00001', usename: 'sakakidai' }))
          navigate('/')
        }}
      >
        SignIn
      </button>
    </>
  )
}

export default App
