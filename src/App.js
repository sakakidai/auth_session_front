import { Route, Routes } from 'react-router-dom'

import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import palette from 'components/themes/palette'

import Layout from 'components/layout/Layout'
import Auth from 'components/layout/Auth'
import Home from 'components/pages/Home'
import Dashboard from 'components/pages/Dashboard'
import SignUp from 'components/pages/SignUp'
import SignIn from 'components/pages/SignIn'
import QiitaItems from 'components/pages/QiitaItems'

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
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/" element={<Auth />}>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/qiita" element={<QiitaItems />} />
          </Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
