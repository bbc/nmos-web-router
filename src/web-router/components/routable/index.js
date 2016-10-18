import './routable.css'

import React, { PropTypes } from 'react'

import Draggable from './draggable-component'
import Button from './button-component'
import Placeholder from './placeholder-componet'

let Routable = ({draggable, baseId, routable, actions}) => {
  let placeholder = null
  if (!routable.contracted) placeholder = <Placeholder />
  let Component = Button
  if (draggable) Component = Draggable
  return <div>
    {placeholder}
    <Component
      baseId={baseId}
      routable={routable}
      actions={actions}
    />
  </div>
}

Routable.propTypes = {
  draggable: PropTypes.bool,
  routable: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  baseId: PropTypes.string.isRequired
}

export default Routable
