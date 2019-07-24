import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

class Sender extends React.Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
    this.onNodeRender = this.onNodeRender.bind(this)
  }

  onClick (event) {
    event.stopPropagation()

    const {sender, actions} = this.props

    let selectable = sender.state.includes('selectable')
    let disabled = sender.state.includes('disabled')
    let removed = sender.state.includes('removed')
    if (selectable && !disabled && !removed) actions.toggleSender(sender)
  }

  onNodeRender (nodeEl) {
    this.props.actions.nodeRendered(nodeEl, this.props.sender, 'senders')
  }

  render () {
    const {sender, index, visibleStartRow, visibleEndRow} = this.props

    return <Routable
      id={sender.id}
      key={sender.id}
      routable={sender}
      node
      onClick={this.onClick}
      onNodeRender={this.onNodeRender}
      allowUpdateRender={index >= visibleStartRow && index <= visibleEndRow}
      />
  }
}

Sender.propTypes = {
  sender: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  visibleStartRow: PropTypes.number.isRequired,
  visibleEndRow: PropTypes.number.isRequired
}

let Senders = props => {
  const {senders, ...otherProps} = props
  return <LayoutItem className='routables senders' gels='4/10'>{
      senders.map((sender, index) => <Sender key={sender.id} sender={sender} index={index} {...otherProps} />)
  }</LayoutItem>
}

Senders.propTypes = {
  senders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  visibleStartRow: PropTypes.number.isRequired,
  visibleEndRow: PropTypes.number.isRequired
}

export default Senders
