import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorPage() {
  const error: any = useRouteError()
  //console.log('error', error)

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h2>{error.statusText || 'Something goes wrong!'}</h2>
      </div>
    )
  }

  //throw error

  return <h2>Something goes wrong!</h2>
}

export default ErrorPage