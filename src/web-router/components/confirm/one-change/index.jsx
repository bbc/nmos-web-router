import React, { PropTypes } from 'react'

import { Layout } from '../../../../gel-react/grid'
import Receiver from './receiver-component'
import Sender from './sender-component'
import Line from './line-component'
import Delete from './delete-change-component'

let Change = ({sender, receiver, actions, type, index, id, state}) => {
  let available = true
  if (state.includes('unavailable')) available = false
  return <Layout
    id={id}
    className={`one-change ${type} ${state}`}
    layouts='flush'>
    <Sender
      sender={sender}
      available={available} />
    <Line
      state={state} />
    <Receiver
      receiver={receiver}
      available={available} />
    <Delete
      actions={actions}
      rID={receiver.id}
      sID={sender.id}
      type={type} />
  </Layout>
}

Change.propTypes = {
  sender: PropTypes.object.isRequired,
  receiver: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
}

export default Change
