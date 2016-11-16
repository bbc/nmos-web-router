import React, { PropTypes } from 'react'
import Icon from './icon-component'
import Checkbox from '../../../components/checkbox-component'
import { No } from '../../../gel-react/iconography'

const noop = function () {}

class Node extends React.Component {
  componentDidMount () {
    this.props.onRender(this.nodeEl)
  }
  render () {
    return <div className={`node-container node-container-${this.props.state}`}>
      <div
        ref={(nodeEl) => { this.nodeEl = nodeEl }}
        onClick={this.props.onClick}
        className={`node ${this.props.state}`}>
        <No />
      </div>
    </div>
  }
}

Node.propTypes = {
  state: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  onRender: PropTypes.func.isRequired
}

let Routable = ({ routable, baseState, node, checkbox, onClick, onButton, onCheckbox, onNode, onNodeRender }) => {
  node = node || 'none'
  baseState = baseState || ''
  onClick = onClick || noop
  onButton = onButton || noop
  onCheckbox = onCheckbox || noop
  onNode = onNode || noop
  onNodeRender = onNodeRender || noop

  let CheckboxComponent = null
  if (checkbox) {
    CheckboxComponent = <Checkbox
      onClick={onCheckbox}
    />
  }

  let NodeComponent = null
  if (node !== 'none') {
    NodeComponent = <Node
      state={`${routable.node.state} ${node}`}
      onClick={onNode}
      onRender={onNodeRender}
    />
  }

  return <div
    className={`routable short ${baseState} ${routable.state}`}
    onClick={onClick}>
    <div
      className='button'
      onClick={onButton}>
      <Icon format={routable.format} />
      <span className='label'>{routable.label}</span>
    </div>
    {CheckboxComponent}
    {NodeComponent}
  </div>
}

Routable.propTypes = {
  routable: PropTypes.object.isRequired,
  baseState: PropTypes.string,
  node: PropTypes.bool,
  checkbox: PropTypes.bool,
  onClick: PropTypes.func,
  onButton: PropTypes.func,
  onCheckbox: PropTypes.func,
  onNode: PropTypes.func,
  onNodeRender: PropTypes.func
}

export default Routable
