import React from 'react'
import { Search } from '../../../gel-react/iconography'

let SearchBox = () => {
  return <div className='search'>
    <input
      type='text'
      placeholder='Enter search text...' />
    <div className='search-icon-container'>
      <Search />
    </div>
  </div>
}

export default SearchBox
