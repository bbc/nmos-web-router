import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import RightRoutable from './right-routable-component'

let Receivers = ({senders, receivers, actions}) => {
  return <LayoutItem className='routables right' gels='1/3'>{
      receivers.map(receiver => {
        return <RightRoutable
          routable={receiver}
          actions={actions}
          leftRoutables={senders}
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
