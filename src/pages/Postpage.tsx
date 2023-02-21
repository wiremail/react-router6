import { Suspense } from 'react'
import { useLoaderData, useNavigate, Await, useAsyncValue, defer } from 'react-router-dom'
import SinglePost from '../components/Post'
import Comment from '../components/Comment'
import { IComment } from '../types/data'

const Comments = () => {
  const comments: any = useAsyncValue()
  return (
    <>
      <h2>Comments</h2>{
        comments.map((comment: IComment) => (
          <Comment {...comment} key={comment.id} />
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
          <SinglePost />
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