import { Link, Outlet } from "react-router-dom"

const Aboutpage = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>some text...</p>

      <ul>
        <li><Link to='contacts'>Contacts</Link></li>
        <li><Link to='team'>Team</Link></li>
      </ul>

      <Outlet />
    </div>
  )
}

export { Aboutpage }