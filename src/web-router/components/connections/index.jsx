import './connections.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from '../shared/header-component'
import Senders from './senders-component'
import Routes from './routes-component'
import Receivers from './receivers-component'

let Connections = ({expanded, senders, receivers, routes, actions, routingMode}) => {
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
          />
      <Routes
        routes={routes}
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
  routingMode: PropTypes.string.isRequired
}

export default Connections
