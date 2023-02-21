import { IComment } from '../types/data'

export default function Comment(comment: IComment) {
  return (
    <div>
      <h3>{comment.email}</h3>
      <h4>{comment.name}</h4>
      <p>{comment.body}</p>
    </div>
  )
}