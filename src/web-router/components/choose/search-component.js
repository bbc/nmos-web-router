import React, { PropTypes } from 'react'
import { Search } from '../../../gel-react/iconography'

let SearchBox = ({term, search}) => {
  return <div className='search'>
    <input
      type='text'
      placeholder='Enter search text...'
      defaultValue={term}
      onInput={function (evt) { search(evt.target.value) }} />
    <div className='search-icon-container'>
      <Search />
    </div>
  </div>
}

SearchBox.propTypes = {
  term: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired
}

export default SearchBox
