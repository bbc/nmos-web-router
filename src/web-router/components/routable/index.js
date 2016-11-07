import React, { PropTypes } from 'react'
import Icon from '../icon-component'
import Checkbox from '../../../components/checkbox-component'
import Node from './node'

let Routable = ({ routable, baseState, node, checkbox, onClick, onButton, onCheckbox, onNode }) => {
  node = node || 'none'
  baseState = baseState || ''
  onClick = onClick || function () {}
  onButton = onButton || function () {}
  onCheckbox = onCheckbox || function () {}
  onNode = onNode || function () {}

  let CheckboxComponent = null
  if (checkbox) CheckboxComponent = <Checkbox
    onClick={onCheckbox}
    />

  let NodeComponent = null
  if (node !== 'none') NodeComponent = <Node
    state={`${routable.node.state} ${node}`}
    onClick={onNode}
    />

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
  onNode: PropTypes.func
}

export default Routable
