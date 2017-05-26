import './confirm.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from './header-component'
import ChangeQueue from './change-queue'
import ClearConfirmButtons from './clear-confirm-buttons-component'

let Confirm = ({senders, receivers, changes, actions}) => {
  return <Layout className='confirm box box-hidden'>
    <Header />
    <ChangeQueue
      senders={senders}
      receivers={receivers}
      actions={actions}
      changes={changes} />
    <ClearConfirmButtons
      changes={changes}
      actions={actions} />
  </Layout>
}

Confirm.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  changes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Confirm
