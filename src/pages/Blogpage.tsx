import { Suspense } from 'react'
import { Await, defer, Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { PostsFilter } from '../components/PostsFilter'

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const Blogpage = () => {
  const { posts }: any = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams()

  const postQuery = searchParams.get('post') || ''
  const latest = searchParams.has('latest')
  const startsFrom = latest ? 80 : 1

  return (
    <div>
      <h1>Blog Page</h1>
      <PostsFilter
        postQuery={postQuery}
        latest={latest}
        setSearchParams={setSearchParams}
      />
      <br />
      <Link to='/posts/new'>Add New Post</Link>
      <br /><br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={posts}>
          {
            (resolvedPosts): any => (<>
              {
                resolvedPosts
                  .filter((post: Post) => post.title.includes(postQuery) && post.id >= startsFrom)
                  .map((post: Post) => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                      <li>{post.title}</li>
                    </Link>
                  ))
              }
            </>)
          }
        </Await>
      </Suspense>
    </div>
  )
}

async function getPosts() {
  const res: any = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Response('', { status: res.status, statusText: 'An error occured' })
  }

  return res.json()
}

const postsLoader = () => {
  return defer({
    posts: getPosts()
  })
}

export { Blogpage, postsLoader }