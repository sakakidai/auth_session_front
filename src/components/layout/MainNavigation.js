import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, userLogOut } from 'features/userSlice'

import palette from 'components/themes/palette'

const Navbar = styled.header`
  width: 100%;
  height: 5rem;
  background-image: linear-gradient(to right, ${palette.primary.main}, ${palette.primary.light});
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const NavbarBrand = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin: 0;
`

const Nav = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: baseline;
`

const NavItem = styled.li`
  margin: 0 1rem;
`

const NavLink = styled(Link)`
  transition: color 0.5s;
  &:hover {
    color: white;
    transition: color 0.5s;
  }
`

const NavButton = styled.a`
  transition: color 0.5s;
  cursor: pointer;
  &:hover {
    color: white;
    transition: color 0.5s;
  }
`

const MainNavigation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { email, isAuthenticated } = useSelector(selectUser)

  const handleLogOut = () => {
    dispatch(userLogOut())
    navigate('/signin')
  }

  return (
    <Navbar>
      <Link to="/">
        <NavbarBrand>Auth Session App</NavbarBrand>
      </Link>
      <Nav>
        {!isAuthenticated && (
          <>
            <NavItem>
              <NavLink to="/signup">新規登録</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signin">ログイン</NavLink>
            </NavItem>
          </>
        )}
        <NavItem>
          <NavLink to="/dashboard">{email}</NavLink>
        </NavItem>
        <NavItem>
          {isAuthenticated && <NavButton onClick={handleLogOut}>ログアウト</NavButton>}
        </NavItem>
      </Nav>
    </Navbar>
  )
}

export default MainNavigation
