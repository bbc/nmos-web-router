import './web-router.css'
import './column-views.css'

import React, { PropTypes } from 'react'
import Main from './main'
import Notifications from './notifications'

let WebRouter = ({data, view, actions}) => {
  let location = view.location || '/choose'
  return <div className={`web-router web-router/${view.routingMode}${location} web-router-notification-${view.notifications.state}`}>
    <Notifications view={view.notifications} />
    <Main view={view} changes={view.changes} actions={actions} />
  </div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
