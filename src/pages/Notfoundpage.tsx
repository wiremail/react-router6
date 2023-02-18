import { Link } from 'react-router-dom'

const Notfoundpage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      Go <Link to='/'>home</Link>
    </div>
  )
}

export { Notfoundpage }