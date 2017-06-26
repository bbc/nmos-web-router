import React, { PropTypes } from 'react'
import { No } from '../../../../gel-react/iconography'
import { LayoutItem } from '../../../../gel-react/grid'

let Delete = ({actions, rID, sID, type, oldSenderID}) => {
  let onClick = () => {
    actions.unstageChange(sID, rID, type)
    setTimeout(function () { actions.removeChange(sID, rID, type) }, 250)
  }

  return <LayoutItem gels='1/12' className='delete-container'>
    <div className='delete-button' onClick={function () { onClick() }}>
      <div className='delete-circle'>
        <No />
      </div>
    </div>
  </LayoutItem>
}

Delete.propTypes = {
  actions: PropTypes.object.isRequired,
  rID: PropTypes.string.isRequired,
  sID: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  oldSenderID: PropTypes.string
}

export default Delete
