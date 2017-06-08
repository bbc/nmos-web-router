import React, { PropTypes } from 'react'

import { Layout, LayoutItem } from '../../../gel-react/grid'
import Receiver from './receiver-component'
import Sender from './sender-component'
import Line from './line-component'
import Delete from './delete-change-component'

let Change = ({sender, receiver, actions, type, index, id, state}) => {
  return <div
    id={id}
    className={`one-change ${type} ${state}`}>
    <Layout layouts='flush'>
      <LayoutItem gels='4/12'>
        <Sender
          sender={sender} />
      </LayoutItem>
      <LayoutItem className='lines-holder' gels='3/12'>
        <Line />
      </LayoutItem>
      <LayoutItem gels='4/12'>
        <Receiver
          receiver={receiver} />
      </LayoutItem>
      <LayoutItem gels='1/12'>
        <Delete
          actions={actions}
          rID={receiver.id} />
      </LayoutItem>
    </Layout>
  </div>
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
