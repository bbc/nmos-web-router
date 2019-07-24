import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

class Receiver extends React.Component {
  constructor (props) {
    super(props)

    this.clicked = 'nothing'

    this.onClick = this.onClick.bind(this)
    this.onButton = this.onButton.bind(this)
    this.onNode = this.onNode.bind(this)
    this.onNodeRender = this.onNodeRender.bind(this)
  }

  onClick (event) {
    event.stopPropagation()
    if (this.clicked === 'nothing') {
      this.route()
    }
  }

  onButton () {
    this.clicked = 'button'
    this.route()
  }

  onNode () {
    const {actions, changes, receiver, routingMode, senders} = this.props

    this.clicked = 'node'
    if (routingMode === 'automatic') {
      actions.unroute(receiver)
    } else {
      actions.addChange(receiver, senders, 'unroute', changes)
    }
  }

  onNodeRender (nodeEl) {
    this.props.actions.nodeRendered(nodeEl, this.props.receiver, 'receivers')
  }

  route () {
    const {actions, changes, receiver, routingMode, senders} = this.props

    let selectable = receiver.state.includes('selectable')
    let disabled = receiver.state.includes('disabled')
    let removed = receiver.state.includes('removed')
    if (selectable && !disabled && !removed) {
      if (routingMode === 'automatic') {
        actions.route(receiver, senders)
      } else {
        actions.addChange(receiver, senders, 'route', changes)
      }
    }
  }

  render () {
    const {receiver, index, visibleStartRow, visibleEndRow} = this.props

    return <Routable
      id={receiver.id}
      key={receiver.id}
      routable={receiver}
      node
      onClick={this.onClick}
      onButton={this.onButton}
      onNode={this.onNode}
      onNodeRender={this.onNodeRender}
      allowUpdateRender={index >= visibleStartRow && index <= visibleEndRow}
      />
  }
}

Receiver.propTypes = {
  senders: PropTypes.array.isRequired,
  receiver: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  routingMode: PropTypes.string.isRequired,
  changes: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  visibleStartRow: PropTypes.number.isRequired,
  visibleEndRow: PropTypes.number.isRequired
}

let Receivers = ({receivers, ...otherProps}) => {
  return <LayoutItem className='routables receivers' gels='4/10'>{
      receivers.map((receiver, index) => <Receiver key={receiver.id} receiver={receiver} index={index} {...otherProps} />)
  }</LayoutItem>
}

Receivers.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  routingMode: PropTypes.string.isRequired,
  changes: PropTypes.array.isRequired,
  visibleStartRow: PropTypes.number.isRequired,
  visibleEndRow: PropTypes.number.isRequired
}

export default Receivers
