import { useAsyncValue } from 'react-router-dom'
import { IComment } from '../types/data'
import Comment from './Comment'

const CommentList = () => {
  const comments: IComment[] = useAsyncValue() as IComment[]

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

export { CommentList }