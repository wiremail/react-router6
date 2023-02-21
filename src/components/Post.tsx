import { Link, useAsyncValue } from 'react-router-dom'

export default function SinglePost() {
  const post: any = useAsyncValue()
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
    </>
  )
}