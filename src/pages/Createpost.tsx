import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Createpost = () => {
  const { signout }: any = useAuth()
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => signout(() => navigate('/', { replace: true }))}>Logout</button>
      <h1>Create Post</h1>
    </div>
  )
}

export { Createpost }