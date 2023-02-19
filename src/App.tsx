import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

import { Homepage } from './pages/Homepage'
import { Aboutpage } from './pages/Aboutpage'
import { Blogpage, postsLoader } from './pages/Blogpage'
import { Notfoundpage } from './pages/Notfoundpage'
import { postLoader, Postpage } from './pages/Postpage'
import { Editpost, updatePostAction } from './pages/Editpost'
import { Createpost, createPostAction } from './pages/Createpost'
import { SigninPage } from './pages/Signinpage'

import { Layout } from './components/Layout'

import { GuardedRoute } from './hoc/GuardedRoute'
import { AuthProvider } from './hoc/AuthProvider'
import ErrorPage from './pages/Errorpage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} /*errorElement={<ErrorPage />}*/>
      <Route index element={<Homepage />} />
      <Route path='about' element={<Aboutpage />} >
        <Route path='contacts' element={<p>Our Contacts</p>} />
        <Route path='team' element={<p>Our Team</p>} />
      </Route>
      <Route path='posts' element={<Blogpage />} loader={postsLoader} errorElement={<ErrorPage />} />
      <Route path='posts/:id' element={<Postpage />} loader={postLoader} />
      <Route path='posts/:id/edit' element={
        <GuardedRoute>
          <Editpost />
        </GuardedRoute>
      } action={updatePostAction} />
      <Route path='posts/new' element={
        <GuardedRoute>
          <Createpost />
        </GuardedRoute>
      } action={createPostAction} />
      <Route path='signin' element={<SigninPage />} />
      <Route path='*' element={<Notfoundpage />} />
    </Route>
  )
)

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider >
  )
}

export default App
