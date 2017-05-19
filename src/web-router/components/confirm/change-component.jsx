import React, { PropTypes } from 'react'

import { Layout, LayoutItem } from '../../../gel-react/grid'
import Receiver from './receiver-component'
import Sender from './sender-component'
import Line from './line-component'
import Delete from './delete-change-component'

let Change = ({senders, receivers, actions, index, type}) => {
  return <div className={`one-change ${type}`}>
    <Layout layouts='flush'>
      <LayoutItem gels='4/12'>
        <Sender
          senders={senders}
          index={index} />
      </LayoutItem>
      <LayoutItem className='lines-holder' gels='3/12'>
        <Line />
      </LayoutItem>
      <LayoutItem gels='4/12'>
        <Receiver
          receivers={receivers}
          index={index} />
      </LayoutItem>
      <LayoutItem gels='1/12'>
        <Delete />
      </LayoutItem>
    </Layout>
  </div>
}

Change.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

export default Change
