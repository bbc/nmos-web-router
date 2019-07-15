import './web-router.css'
import './column-views.css'

import React, { PropTypes } from 'react'
import Main from './main'
import Notifications from './notifications'
import SignIn from './security/signin-component'

let WebRouter = ({data, view, actions}) => {
  let location = view.location || '/choose'
  return <div style={{ width: '100%' }}>
    <div className='sign-in'>
      <SignIn view={view} actions={actions} />
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
