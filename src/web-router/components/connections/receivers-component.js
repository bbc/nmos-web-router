import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Receiver from './receiver-component'

let Receivers = ({senders, receivers, actions}) => {
  return <LayoutItem className='routables receivers' gels='1/3'>{
      receivers.map(receiver => {
        return <Receiver
          receiver={receiver}
          actions={actions}
          senders={senders}
          key={receiver.id} />
      })
  }</LayoutItem>
}

Receivers.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Receivers
