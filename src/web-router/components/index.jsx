import './web-router.css'
import './column-views.css'

import React, { PropTypes } from 'react'
import Main from './main'
import Notifications from './notifications'
import SignIn from './security/signin-component'
import Status from './status'

let WebRouter = ({data, view, actions}) => {
  let location = view.location || '/choose'
  return <div>
    <div className='sign-in'>
      <SignIn view={view} actions={actions} />
    </div>
    <div className='status'>
      <Status status={view.connectionStatus} />
    </div>
    <div className={`web-router web-router/${view.routingMode}${location} web-router-notification-${view.notifications.state}`}>
      <Notifications view={view.notifications} />
      <Main view={view} changes={view.changes} actions={actions} />
    </div>
  < /div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
