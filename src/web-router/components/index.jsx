import './web-router.css'

import React, { PropTypes } from 'react'
import Main from './main'
import Notifictions from './notifications'

let WebRouter = ({data, view, actions}) => {
  return <div className={`web-router web-router${view.location} web-router-notification-${view.notifications.state}`}>
    <Notifictions view={view.notifications} />
    <Main view={view} actions={actions} />
  </div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
