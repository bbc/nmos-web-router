import './connections.css'

import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Header from '../header-component'
import Senders from './senders-component'
import Receivers from './receivers-component'

let Connections = ({expandedSender, senders, receivers, actions}) => {
  return <Layout className='box box-scroll'
    onClick={function () { if (expandedSender.state !== 'contracted') actions.toggleSender(expandedSender) }}>
    <Header />
    <Layout gels='1/1' layouts='flush'>
      <Senders
        senders={senders}
        actions={actions}
        />
      <LayoutItem gels='2/10' />
      <Receivers
        senders={senders}
        receivers={receivers}
        actions={actions}
        />
    </Layout>
  </Layout>
}

Connections.propTypes = {
  expandedSender: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Connections
