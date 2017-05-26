import React, { PropTypes } from 'react'
import { No } from '../../../gel-react/iconography'

let Delete = ({actions, index}) => {
  let onClick = () => {
    actions.unstageChange(index)
    setTimeout(removeChange, 250)
  }
  let removeChange = () => {
    actions.removeChange(index)
  }

  return <div className='delete-button' onClick={function () { onClick() }}>
    <div className='delete-circle'>
      <No />
    </div>
  </div>
}

Delete.propTypes = {
  actions: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default Delete
