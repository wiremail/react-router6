import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Editpost = () => {
  const { id } = useParams()
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data))
  }, [])

  return (
    <div>
      <h1>Edit Post</h1>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </>
      )}
    </div>
  )
}

export { Editpost }