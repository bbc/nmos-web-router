import './routable.css'

import React, { PropTypes } from 'react'

import Draggable from './draggable-component'
import Button from './button-component.js'

let Routable = ({draggable, baseId, data, view, actions}) => {
  let Component = Button
  if (draggable) Component = Draggable
  return <Component
    baseId={baseId}
    data={data}
    view={view}
    actions={actions}
    />
}

Routable.propTypes = {
  draggable: PropTypes.bool,
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  baseId: PropTypes.string.isRequired
}

export default Routable
