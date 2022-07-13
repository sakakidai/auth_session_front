import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser, selectUser } from 'features/userSlice'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  const dispatch = useDispatch()
  const { isLoading, isAuthenticated } = useSelector(selectUser)

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(fetchCurrentUser())
    }
  }, [dispatch, isAuthenticated])

  if (isLoading) {
    return <p>loading...</p>
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="signin" />
}

export default Auth
