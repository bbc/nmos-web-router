import './confirm.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from '../shared/header-component'
import ChangeQueue from './change-queue'

let Confirm = ({senders, receivers, actions}) => {
  return <Layout className='confirm box box-hidden'>
    <Header />
    <ChangeQueue
      senders={senders}
      receivers={receivers}
      actions={actions} />
  </Layout>
}

Confirm.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Confirm
