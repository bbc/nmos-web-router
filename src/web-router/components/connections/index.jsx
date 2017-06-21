import './connections.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from '../shared/header-component'
import Senders from './senders-component'
import Routes from './routes-component'
import Receivers from './receivers-component'
import addChanges from './add-changes-to-routes'

let Connections = ({expanded, senders, receivers, routes, actions, routingMode, changes}) => {
  let updatedRoutes = routes
  if (changes.length >= 1) {
    updatedRoutes = addChanges({changes, routes, senders, receivers})
  }
  if (updatedRoutes === null) {
    updatedRoutes = routes
    console.log('Update failed')
  }

  return <Layout className='connections box box-hidden connections-box'
    onClick={function () { if (!expanded.state.includes('contracted')) actions.toggleSender(expanded) }}>
    <Header />
    <Layout gels='1/1' layouts='flush' className='routables-scroll' onScroll={() => { if (!expanded.state.includes('contracted')) actions.update() }}>
      <Senders
        senders={senders}
        actions={actions}
        />
      <Receivers
        senders={senders}
        receivers={receivers}
        actions={actions}
        routingMode={routingMode}
        changes={changes}
          />
      <Routes
        routes={updatedRoutes}
        actions={actions}
        expanded={expanded}
        />
    </Layout>
  </Layout>
}

Connections.propTypes = {
  expanded: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  routingMode: PropTypes.string.isRequired,
  changes: PropTypes.array.isRequired
}

export default Connections
