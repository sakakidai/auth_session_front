import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCurrentUser, selectUser } from 'features/userSlice'
import { Navigate, Outlet } from 'react-router-dom'

const Auth = () => {
  const [waiting, setWaiting] = useState(true)
  const dispatch = useDispatch()
  const { isLoading, isAuthenticated } = useSelector(selectUser)

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(fetchCurrentUser())
    }
    setWaiting(false)
  }, [dispatch, isAuthenticated])

  if (isLoading || waiting) {
    return <p>loading...</p>
  }

  console.log('レンダー')
  if (isAuthenticated) {
    return <Outlet />
  } else {
    return <Navigate to="signin" />
  }
}

export default Auth
