import React, { PropTypes } from 'react'

import { Layout } from '../../../../gel-react/grid'
import Receiver from './receiver-component'
import Sender from './sender-component'
import Line from './line-component'
import Delete from './delete-change-component'

let Change = ({id, actions, change}) => {
  let available = !(change.state.includes('unavailable'))
  return <Layout
    id={id}
    className={`one-change ${change.type} ${change.state}`}
    layouts='flush'>
    <Sender
      sender={change.sender}
      available={available} />
    <Line
      state={change.state} />
    <Receiver
      receiver={change.receiver}
      available={available} />
    <Delete
      actions={actions}
      change={change} />
  </Layout>
}

Change.propTypes = {
  id: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  change: PropTypes.object.isRequired
}

export default Change
