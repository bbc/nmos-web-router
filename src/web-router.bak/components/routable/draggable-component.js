import React, { PropTypes } from 'react'
import Draggable from 'react-draggable'
import RoutableButton from './button-component.js'

function createDrag (func, data, status) {
  return (evt) => {
    func(evt, data, status)
  }
}

let DraggableRoutable = ({data, actions}) => {
  return <Draggable
    onStart={createDrag(actions.drag, data, 'started')}
    onDrag={createDrag(actions.drag, data, 'dragging')}
    onStop={createDrag(actions.drag, data, 'stopped')}
    position={{ x: 0, y: 0 }}
    >
    <div className='draggable' />
  </Draggable>
}

DraggableRoutable.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

let RoutableDraggable = ({baseId, data, view, actions}) => {
  let draggable = <DraggableRoutable
    data={data}
    actions={actions}
    />
  return <RoutableButton
    baseId={baseId}
    data={data}
    view={view}
    actions={actions}
    draggable={draggable}
    />
}

RoutableDraggable.propTypes = {
  baseId: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default RoutableDraggable
