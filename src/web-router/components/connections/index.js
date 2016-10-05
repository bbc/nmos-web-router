import './connections.css'

import React, { PropTypes } from 'react'
import RoutablesColumn from './routables-column-component'
import RoutesColumn from './routes-column-component'
import { LayoutItem } from '../../../gel-react/grid'
import { GreatPrimer, Pica } from '../../../gel-react/typography'

let Connections = ({data, view, sides, actions, layout}) => {
  let pointDisplay = view.isDragging ? 'block' : 'none'
  let dragging = view.isDragging ? 'dragging' : ''
  return <LayoutItem className={`connections ${dragging}`} gels={[`${layout}@l`, '1/1']} >
    <LayoutItem gel='1/3' >
      <GreatPrimer bold>Connections</GreatPrimer>
    </LayoutItem>
    <LayoutItem gel='2/3' />
    <LayoutItem gel='1/3' >
      <Pica bold>{view.leftTitle}</Pica>
    </LayoutItem>
    <LayoutItem gel='1/3' />
    <LayoutItem gel='1/3' >
      <Pica bold>{view.rightTitle}</Pica>
    </LayoutItem>
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
