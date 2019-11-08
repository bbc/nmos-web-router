import React, {PropTypes} from 'react'
import Notification from './notification-component'
import './notifications.css'

let Notifictions = ({view}) => {
  return <div className='notifications'>
    <Notification
      message={view.message}
      type={view.type}
    />
  </div>
}

Notifictions.propTypes = {
  view: PropTypes.object.isRequired
}

export default Notifictions
