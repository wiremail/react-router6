import { useAuth } from '../hooks/useAuth'
import { redirect, useNavigate, useNavigation } from 'react-router-dom'
import NewPost from '../components/NewPost'

const Createpost = () => {
  const { signout }: any = useAuth()
  const navigate = useNavigate()
  const navigation = useNavigation()

  return (
    <div>
      <button onClick={() => signout(() => navigate('/', { replace: true }))}>Logout</button>
      <h1>Create Post</h1>
      <NewPost submitting={navigation.state === 'submitting'} />
    </div>
  )
}

const createPost = async ({ title, body, userId }: any) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body, userId })
  })

  const newPost = await res.json()
  return newPost
}

const createPostAction = async ({ request }: any) => {
  const formData = await request.formData()
  const newPost = {
    title: formData.get('title'),
    body: formData.get('body'),
    userId: formData.get('userId'),
  }

  const post = await createPost(newPost)

  return redirect(`/posts/${post.id}`)
}

export { Createpost, createPostAction }