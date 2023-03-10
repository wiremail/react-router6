export interface IPost {
  id?: number
  userId: number
  title: string
  body: string
}

// export interface IPostWithSubmitting extends IPost {
//   submitting: boolean
// }

export interface IComment {
  id: number
  email: string
  name: string
  body: string
}