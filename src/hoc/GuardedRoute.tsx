import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const GuardedRoute = ({ children }: any) => {
  const location = useLocation()
  const { user }: any = useAuth()

  if (!user) {
    return <Navigate to='/signin' state={{ from: location }} />
  }

  return children
}

export { GuardedRoute }