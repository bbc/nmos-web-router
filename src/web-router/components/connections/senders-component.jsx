import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../shared/routable-component'

let Senders = ({senders, actions}) => {
  return <LayoutItem className='routables senders' gels='4/10'>{
      senders.map(sender => {
        return <Routable
          key={sender.id}
          routable={sender}
          node
          onClick={function (evt) {
            evt.stopPropagation()
            actions.toggleSender(sender)
          }}
          />
      })
  }</LayoutItem>
}

Senders.propTypes = {
  senders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Senders
