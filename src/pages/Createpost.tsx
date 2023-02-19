import { useAuth } from '../hooks/useAuth'
import { redirect, useActionData, useNavigate, useNavigation } from 'react-router-dom'
import NewPost from '../components/NewPost'
import { IPost } from '../types/data'

const Createpost = () => {
  const { signout }: any = useAuth()
  const navigate = useNavigate()
  const navigation = useNavigation()
  const data: any = useActionData()

  return (
    <div>
      <button onClick={() => signout(() => navigate('/', { replace: true }))}>Logout</button>
      {data?.message && <div style={{ color: 'green' }}>{data.message}</div>}
      <h1>Create Post</h1>
      <NewPost submitting={navigation.state === 'submitting'} />
    </div>
  )
}

const createPost = async ({ title, body, userId }: IPost) => {
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

  // Validation data
  if (!formData.get('title') || !formData.get('body')) {
    return { message: 'All fields are required' }
  }

  const newPost: IPost = {
    title: formData.get('title'),
    body: formData.get('body'),
    userId: formData.get('userId'),
  }

  const post = await createPost(newPost)

  return redirect(`/posts/${post.id}`)
}

export { Createpost, createPostAction }