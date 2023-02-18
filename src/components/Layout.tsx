import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Blog</NavLink>
        <NavLink to="about">About</NavLink>
      </header>

      <main className='container'>
        <Outlet />
      </main>

      <footer className='container'>&copy; 2023</footer>
    </>
  )
}

export { Layout }