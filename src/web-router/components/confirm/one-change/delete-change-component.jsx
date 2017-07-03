import React, { PropTypes } from 'react'
import { No } from '../../../../gel-react/iconography'
import { LayoutItem } from '../../../../gel-react/grid'

let Delete = ({actions, change}) => {
  let onClick = () => {
    actions.unstageChange(change)
    setTimeout(function () {
      actions.removeChange(change.sender.id, change.receiver.id, change.type)
    }, 250)
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
  change: PropTypes.object.isRequired
}

export default Delete