import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Sender from './sender-component'

let Senders = ({senders, actions}) => {
  return <LayoutItem className='routables senders' gels='1/3'>{
      senders.map(routable => {
        return <Sender
          routable={routable}
          actions={actions}
          key={routable.id} />
      })
  }</LayoutItem>
}

Senders.propTypes = {
  senders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Senders
