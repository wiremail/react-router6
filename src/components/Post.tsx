import { Link, useAsyncValue } from 'react-router-dom'
import { IPost } from '../types/data'

export default function SinglePost() {
  const post: IPost = useAsyncValue() as IPost
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
    </>
  )
}