import './connections.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from '../shared/header-component'
import Senders from './senders-component'
import Routes from './routes-component'
import Receivers from './receivers-component'

let Connections = ({routesEl, expandedSender, senders, receivers, actions}) => {
  return <Layout className='connections box box-hidden'
    onClick={function () { if (!expandedSender.state.includes('contracted')) actions.toggleSender(expandedSender) }}>
    <Header />
    <Layout gels='1/1' layouts='flush' className='routables-scroll'>
      <Senders
        senders={senders}
        actions={actions}
        />
      <Receivers
        senders={senders}
        receivers={receivers}
        actions={actions}
          />
      <Routes
        expandedSender={expandedSender}
        routesEl={routesEl}
        receivers={receivers}
        actions={actions}
        />
    </Layout>
  </Layout>
}

Connections.propTypes = {
  routesEl: PropTypes.any,
  expandedSender: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Connections
