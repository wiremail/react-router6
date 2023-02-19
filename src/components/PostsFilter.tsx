import { useState } from 'react'

type FormFields = {
  search: HTMLInputElement,
  latest: HTMLInputElement
}

const PostsFilter = ({ postQuery, latest, setSearchParams }: any) => {
  const [search, setSearch] = useState(postQuery)
  const [checked, setChecked] = useState(latest)

  const handleSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const query = form.search.value
    const isLatest = form.latest.checked

    const params: any = {}

    if (query.length) params.post = query
    if (isLatest) params.latest = true

    setSearchParams(params)
  }

  return (
    <form autoComplete='off' onSubmit={handleSubmit}>
      <input
        type="search"
        name='search'
        value={search}
        onChange={event => setSearch(event.target.value)}
      />
      <label style={{ padding: '0 1rem' }}>
        <input
          type="checkbox"
          name='latest'
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
        /> New only
      </label>
      <input type="submit" value='Search' />
    </form>
  )
}

export { PostsFilter }