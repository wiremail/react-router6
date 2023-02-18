import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const SigninPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { signin }: any = useAuth()

  const fromPage = location.state?.from?.pathname || '/'

  const handleSubmit = (event: any) => {
    event.preventDefault()

    const form = event.target
    const user = form.email.value

    signin(user, () => navigate(fromPage, { replace: true }))
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email: <input name='email' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export { SigninPage }