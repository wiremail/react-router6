import { useState, useEffect } from 'react'
import { useActionData, useLoaderData, useNavigation, useParams } from 'react-router-dom'
import UpdatePost from '../components/UpdatePost'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Editpost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<Post>()
  const data: any = useActionData()
  //const { post }: any = useLoaderData()
  const navigation = useNavigation()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      {data?.message && <div style={{ color: 'green' }}>{data.message}</div>}
      <h1>Edit Post</h1>
      <UpdatePost {...post} submitting={navigation.state === 'submitting'} />
    </div>
  )
}

const updatePost = async (post: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
    method: 'PUT',
    body: post
  })

  return res.json()
}

const updatePostAction = async ({ request }: any) => {
  const formData = await request.formData()

  // Validation data
  if (!formData.get('title') || !formData.get('body')) {
    return { message: 'All fields are required' }
  }

  const updatedPost: any = await updatePost(formData)

  return { message: `Post ${updatedPost.id} was successfully updated` }
}

export { Editpost, updatePostAction }