import React, { PropTypes } from 'react'
import { Search } from '../../../gel-react/iconography'

let SearchBox = ({mode, term, actions, expanded}) => {
  return <div className='search'>
    <input
      type='text'
      placeholder='Enter search text...'
      defaultValue={term}
      onInput={function (evt) {
        if (!expanded.state.includes('contracted')) actions.toggleSender(expanded)
        actions.search(mode, evt.target.value)
      }} />
    <div className='search-icon-container'>
      <Search />
    </div>
  </div>
}

SearchBox.propTypes = {
  mode: PropTypes.string.isRequired,
  term: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default SearchBox
