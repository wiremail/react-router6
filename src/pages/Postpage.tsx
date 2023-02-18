import { Suspense } from 'react'
import { Link, useLoaderData, useNavigate, Await, useAsyncValue, defer } from 'react-router-dom'

// interface iPost {
//   userId: number,
//   id: number,
//   title: string,
//   body: string
// }

const Post = () => {
  const post: any = useAsyncValue()
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit this post</Link>
    </>
  )
}

const Comments = () => {
  const comments: any = useAsyncValue()
  return (
    <>
      <h2>Comments</h2>{
        comments.map((comment: any) => (
          <>
            <h3>{comment.email}</h3>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </>
        ))
      }
    </>
  )
}

const Postpage = () => {
  const { post, comments }: any = useLoaderData()

  const navigate = useNavigate()

  const goBack = () => navigate(-1)

  return (
    <div>
      <button onClick={goBack}>Go Back</button>
      <Suspense fallback={<h2>Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Suspense fallback={<h2>Comments is loading...</h2>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
    </div>
  )
}

async function getPostById(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

async function getCommentsByPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
  return res.json()
}

const postLoader = async ({ params }: any) => {
  const id = params.id

  return defer({
    post: getPostById(id),
    comments: getCommentsByPost(id)
  })
}

export { Postpage, postLoader }