import { Form } from "react-router-dom"
import { IPost } from '../types/data'

interface PostProps {
  post: IPost,
  submitting: boolean
}

const UpdatePost = ({ post, submitting }: PostProps) => {
  return (
    <Form method="post" action={`/posts/${post.id}/edit`}>
      <label>
        Title:
        <input type="text" name="title" defaultValue={post.title} />
      </label>
      <label>
        Body:
        <input type="text" name="body" defaultValue={post.body} />
      </label>
      <input type="hidden" name="userId" value={post.userId} />
      <input type="hidden" name="id" value={post.id} />
      <input type="submit" value="Update Post" disabled={submitting} />
    </Form>
  )
}

export default UpdatePost