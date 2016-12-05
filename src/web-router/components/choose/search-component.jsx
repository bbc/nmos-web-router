import React, { PropTypes } from 'react'
import { Search } from '../../../gel-react/iconography'

let SearchBox = ({term, actions, expanded}) => {
  return <div className='search'>
    <input
      type='text'
      placeholder='Enter search text...'
      defaultValue={term}
      onInput={function (evt) {
        if (!expanded.state.includes('contracted')) actions.toggleSender(expanded)
        actions.search(evt.target.value)
      }} />
    <div className='search-icon-container'>
      <Search />
    </div>
  </div>
}

SearchBox.propTypes = {
  term: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default SearchBox
