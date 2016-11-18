import React, {PropTypes} from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Route from './route-component'

function Routed (receivers, expandedSender, routesEl) {
  return receivers.filter(receiver => {
    let checked = false
    let removed = false
    let routed = receiver.subscription.sender_id !== null
    if (routed) {
      let receiverChecked = receiver.state.includes('checked')
      let sender = receiver.subscription.routed
      let senderChecked = sender.state.includes('checked')
      checked = receiverChecked && senderChecked

      let receiverRemoved = receiver.state.includes('removed')
      let senderRemoved = sender.state.includes('removed')
      removed = receiverRemoved || senderRemoved
    }
    return routed && checked && !removed
  }).map((receiver, index) => {
    let expanded = false
    let sender = receiver.subscription.routed
    if (expandedSender.state.includes('expanded') && expandedSender.id === sender.id) {
      expanded = true
      receiver = {
        nodeEl: receiver.nodeEl
      }
      sender = {
        nodeEl: document.querySelector('.expanded-sender .node')
      }
    }
    return <Route
      state='routed'
      expanded={expanded}
      routesEl={routesEl}
      key={`routed-route-${index}`}
      receiverNodeEl={receiver.nodeEl}
      senderNodeEl={sender.nodeEl}
      />
  })
}

function Routing (receivers, expandedSender, routesEl) {
  receivers = receivers.filter(receiver => {
    let checked = receiver.state.includes('checked')
    let removed = receiver.state.includes('removed')
    return checked && !removed
  })

  let routes = []
  receivers.forEach(receiver => {
    receiver.subscription.routing.filter(sender => {
      let checked = sender.state.includes('checked')
      let removed = sender.state.includes('removed')
      return checked && !removed
    }).forEach((sender, index) => {
      let expanded = false

      if (expandedSender.state.includes('expanded') && expandedSender.id === sender.id) {
        expanded = true
        receiver = {
          nodeEl: receiver.nodeEl
        }
        sender = {
          nodeEl: document.querySelector('.expanded-sender .node')
        }
      }

      routes.push(<Route
        state='routing'
        expanded={expanded}
        routesEl={routesEl}
        key={`unrouting-route-${index}-${receiver.id}`}
        receiverNodeEl={receiver.nodeEl}
        senderNodeEl={sender.nodeEl}
        />)
    })
  })

  return routes
}

function Unrouting (receivers, expandedSender, routesEl) {
  return null
}

function Unrouted (receivers, expandedSender, routesEl) {
  return null
}

class Routes extends React.Component {
  componentDidMount () {
    this.props.actions.routesRendered(document.querySelector('.routes'))
  }
  render () {
    return <LayoutItem
      className='routes'
      gels='2/10'>
      <div className='routes-container'>
        {Routed(this.props.receivers, this.props.expandedSender, this.props.routesEl)}
        {Routing(this.props.receivers, this.props.expandedSender, this.props.routesEl)}
        {Unrouting(this.props.receivers, this.props.expandedSender, this.props.routesEl)}
        {Unrouted(this.props.receivers, this.props.expandedSender, this.props.routesEl)}
      </div>
    </LayoutItem>
  }
}

Routes.propTypes = {
  expandedSender: PropTypes.object.isRequired,
  routesEl: PropTypes.any,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Routes
