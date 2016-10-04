import './connections.css'

import React, { PropTypes } from 'react'
import RoutablesColumn from './routables-column-component'
import RoutesColumn from './routes-column-component'

let Connections = ({data, view, sides, actions, layout}) => {
  let pointDisplay = view.isDragging ? 'block' : 'none'
  let dragging = view.isDragging ? 'dragging' : ''
  return <div className={`gel-layout__item connections gel-${layout} ${dragging}`}>
    <div className='gel-layout__item gel-1/3' >
      <h3>Connections</h3>
    </div>
    <div className='gel-layout__item gel-2/3' />
    <div className='gel-layout__item gel-1/3' >
      <h4>{view.leftTitle}</h4>
    </div>
    <div className='gel-layout__item gel-1/3' />
    <div className='gel-layout__item gel-1/3' >
      <h4>{view.rightTitle}</h4>
    </div>
    <RoutablesColumn
      routables={data[sides.left.plural]}
      view={view[sides.left.plural]}
      actions={actions}
      side={sides.left.plural}
      sideName='left'
      />
    <RoutesColumn
      data={data}
      view={view}
      />
    <RoutablesColumn
      routables={data[sides.right.plural]}
      view={view[sides.right.plural]}
      actions={actions}
      side={sides.right.plural}
      sideName='right'
      />
    <div
      className='point point-mouse'
      style={{
        left: `${view.mouse.x}px`,
        top: `${view.mouse.y}px`,
        display: pointDisplay
      }}
        />
  </div>
}

Connections.propTypes = {
  data: PropTypes.object.isRequired,
  sides: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  layout: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default Connections
