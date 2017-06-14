import React, { PropTypes } from 'react'
import { No } from '../../../gel-react/iconography'

let Delete = ({actions, rID, sID, type}) => {
  let onClick = () => {
    actions.unstageChange(rID)
    setTimeout(removeChange, 250)
  }
  let removeChange = () => {
    actions.removeChange(rID, sID, type, false)
  }

  return <div className='delete-button' onClick={function () { onClick() }}>
    <div className='delete-circle'>
      <No />
    </div>
  </div>
}

Delete.propTypes = {
  actions: PropTypes.object.isRequired,
  rID: PropTypes.string.isRequired,
  sID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Delete
