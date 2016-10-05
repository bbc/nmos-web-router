import './connections.css'

import React, { PropTypes } from 'react'
import RoutablesColumn from './routables-column-component'
import { LayoutItem } from '../../../gel-react/grid'
import Header from './header-component'
import PointMouse from './point-mouse-component'

let Connections = ({data, view, sides, actions, layout}) => {
  let dragging = view.isDragging ? 'dragging' : ''
  return <LayoutItem className={`connections ${dragging}`} gels={[`${layout}@l`, '1/1']} >
    <Header left={view.leftTitle} right={view.rightTitle} />
    <RoutablesColumn
      routables={data[sides.left.plural]}
      view={view[sides.left.plural]}
      actions={actions}
      side={sides.left.plural}
      sideName='left'
      />
    <PointMouse isDragging={view.isDragging} mouse={view.mouse} />
  </LayoutItem>
}

Connections.propTypes = {
  data: PropTypes.object.isRequired,
  sides: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default Connections
