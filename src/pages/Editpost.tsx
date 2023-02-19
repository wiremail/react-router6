import { useState, useEffect } from 'react'
import { useActionData, useNavigation, useParams } from 'react-router-dom'
import UpdatePost from '../components/UpdatePost'
import { IPost } from '../types/data'

const INITIAL_POST_STATE = { id: 0, userId: 0, title: '', body: '' }

const Editpost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<IPost>(INITIAL_POST_STATE)
  const data: any = useActionData()

  const navigation = useNavigation()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then((data: IPost) => setPost(data))
  }, [id])

  return (
    <div>
      {data?.message && <div style={{ color: 'green' }}>{data.message}</div>}
      <h1>Edit Post</h1>
      <UpdatePost {...post} submitting={navigation.state === 'submitting'} />
    </div>
  )
}

const updatePost = async (formData: any) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${formData.get('id')}`, {
    method: 'PUT',
    body: formData
  })

  return res.json()
}

const updatePostAction = async ({ request }: any) => {
  const formData = await request.formData()

  // Validation data
  if (!formData.get('title') || !formData.get('body')) {
    return { message: 'All fields are required' }
  }

  const updatedPost = await updatePost(formData)

  return { message: `Post ${updatedPost.id} was successfully updated` }
}

export { Editpost, updatePostAction }