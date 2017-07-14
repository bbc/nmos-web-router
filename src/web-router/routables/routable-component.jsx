import './routables.css'
import React, { PropTypes } from 'react'
import Icon from '../components/shared/icon-component'
import Checkbox from './checkbox-component'
import { No } from '../../gel-react/iconography'

const noop = function () {}

class Node extends React.Component {
  componentDidMount () {
    this.props.onRender(this.nodeEl)
  }
  render () {
    return <div className='node-container'>
      <div
        ref={(nodeEl) => { this.nodeEl = nodeEl }}
        onClick={this.props.onClick}
        className='node'>
        <No />
      </div>
    </div>
  }
}

Node.propTypes = {
  onClick: PropTypes.func.isRequired,
  onRender: PropTypes.func.isRequired
}

let Routable = ({ id, routable, baseState, node, checkbox, onClick, onButton, onCheckbox, onNode, onNodeRender, columnTitle, timeRemoved }) => {
  id = id || ''
  node = node || 'none'
  baseState = baseState || ''
  onClick = onClick || noop
  onButton = onButton || noop
  onCheckbox = onCheckbox || noop
  onNode = onNode || noop
  onNodeRender = onNodeRender || noop
  timeRemoved = timeRemoved || 0

  let routableState = routable.stateString || ''

  let CheckboxComponent = null
  if (checkbox) {
    CheckboxComponent = <Checkbox
      onClick={onCheckbox}
    />
  }

  let NodeComponent = null
  if (node !== 'none') {
    NodeComponent = <Node
      onClick={onNode}
      onRender={onNodeRender}
    />
  }

  let columnTitleLabel = columnTitle || ''

  return <div
    id={id}
    className={`routable short ${baseState} ${routableState}`}
    onClick={onClick}>
    <div
      className='button'
      onClick={onButton}>
      <span className='column-label'>{columnTitleLabel}</span>
      <Icon format={routable.format} />
      <span className='label'>{routable.label}</span>
    </div>
    {CheckboxComponent}
    {NodeComponent}
  </div>
}

Routable.propTypes = {
  id: PropTypes.string,
  routable: PropTypes.object.isRequired,
  baseState: PropTypes.string,
  node: PropTypes.bool,
  checkbox: PropTypes.bool,
  onClick: PropTypes.func,
  onButton: PropTypes.func,
  onCheckbox: PropTypes.func,
  onNode: PropTypes.func,
  onNodeRender: PropTypes.func,
  columnTitle: PropTypes.string,
  timeRemoved: PropTypes.number
}

export default Routable
