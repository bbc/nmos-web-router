import React, { PropTypes } from 'react'
import { No } from '../../../gel-react/iconography'

let Delete = ({actions, rID}) => {
  let onClick = () => {
    actions.unstageChange(rID)
    setTimeout(removeChange, 250)
  }
  let removeChange = () => {
    actions.removeChange(rID)
  }

  return <div className='delete-button' onClick={function () { onClick() }}>
    <div className='delete-circle'>
      <No />
    </div>
  </div>
}

Delete.propTypes = {
  actions: PropTypes.object.isRequired,
  rID: PropTypes.string.isRequired
}

export default Delete
