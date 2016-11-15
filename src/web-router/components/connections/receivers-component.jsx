import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../shared/routable-component'

let Receivers = ({senders, receivers, actions}) => {
  return <LayoutItem className='routables receivers' gels='4/10'>{
      receivers.map(receiver => {
        return <Routable
          key={receiver.id}
          routable={receiver}
          node
          onClick={function (evt) {
            evt.stopPropagation()
          }}
          onButton={function () {
            let selectable = receiver.state.includes('selectable')
            let disabled = receiver.state.includes('disabled')
            let removed = receiver.state.includes('removed')
            if (selectable && !disabled && !removed) actions.route(receiver, senders)
          }}
          onNode={function () {
            actions.unroute(receiver)
          }}
          />
      })
  }</LayoutItem>
}

Receivers.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Receivers
