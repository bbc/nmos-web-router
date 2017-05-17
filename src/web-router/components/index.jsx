import './web-router.css'
import './confirm-mode.css'

import React, { PropTypes } from 'react'
import Main from './main'
import Notifications from './notifications'

let WebRouter = ({data, view, actions}) => {
  if (!view.routingMode) {
    view.routingMode = 'manual'
  }
  return <div className={`web-router web-router/${view.routingMode}${view.location} web-router-notification-${view.notifications.state}`}>
    <Notifications view={view.notifications} />
    <Main view={view} actions={actions} />
  </div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
