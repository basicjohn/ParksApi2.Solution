import { useState } from 'react'

function Search() {
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [established, setEstablished] = useState('')
  return (
    <div>
      search form
    </div>
  )
}

export default Search;
