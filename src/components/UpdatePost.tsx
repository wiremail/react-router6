import { Form } from "react-router-dom"
import { IPostWithSubmitting } from '../types/data'

const UpdatePost = ({ id, userId, title, body, submitting }: IPostWithSubmitting) => {
  return (
    <Form method="post" action={`/posts/${id}/edit`}>
      <label>
        Title:
        <input type="text" name="title" defaultValue={title} />
      </label>
      <label>
        Body:
        <input type="text" name="body" defaultValue={body} />
      </label>
      <input type="hidden" name="userId" value={userId} />
      <input type="hidden" name="id" value={id} />
      <input type="submit" value="Update Post" disabled={submitting} />
    </Form>
  )
}

export default UpdatePost