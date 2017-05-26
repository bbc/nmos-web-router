import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

let Receivers = ({senders, receivers, actions, routingMode}) => {
  return <LayoutItem className='routables receivers' gels='4/10'>{
      receivers.map(receiver => {
        let clicked = 'nothing'
        function route () {
          let selectable = receiver.state.includes('selectable')
          let disabled = receiver.state.includes('disabled')
          let removed = receiver.state.includes('removed')
          if (selectable && !disabled && !removed) {
            if (routingMode === 'automatic') {
              actions.route(receiver, senders)
            } else {
              actions.addChange(receiver, senders, 'route')
            }
          }
        }

        return <Routable
          id={receiver.id}
          key={receiver.id}
          routable={receiver}
          node
          onClick={function (evt) {
            evt.stopPropagation()
            if (clicked === 'nothing') route()
          }}
          onButton={function () {
            clicked = 'button'
            route()
          }}
          onNode={function () {
            clicked = 'node'
            if (routingMode === 'automatic') {
              actions.unroute(receiver)
            } else {
              actions.addChange(receiver, senders, 'unroute')
            }
          }}
          onNodeRender={function (nodeEl) {
            actions.nodeRendered(nodeEl, receiver, 'receivers')
          }}
          />
      })
  }</LayoutItem>
}

Receivers.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  routingMode: PropTypes.string.isRequired
}

export default Receivers
