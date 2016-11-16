import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../shared/routable-component'

let Senders = ({senders, actions}) => {
  return <LayoutItem className='routables senders' gels='4/10'>{
      senders.map(sender => {
        return <Routable
          id={sender.id}
          key={sender.id}
          routable={sender}
          node
          onClick={function (evt) {
            evt.stopPropagation()
            let selectable = sender.state.includes('selectable')
            let disabled = sender.state.includes('disabled')
            let removed = sender.state.includes('removed')
            if (selectable && !disabled && !removed) actions.toggleSender(sender)
          }}
          onNodeRender={function (nodeEl) {
            actions.nodeRendered(nodeEl, sender, 'senders')
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
