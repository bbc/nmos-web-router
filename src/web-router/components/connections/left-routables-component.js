import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import LeftRoutable from './left-routable-component'

let LeftRoutables = ({side, routables, actions}) => {
  return <LayoutItem className={`routables ${side}`} gels='1/3'>{
      routables.map(routable => {
        return <LeftRoutable
          routable={routable}
          baseId='connections'
          actions={actions}
          key={routable.id} />
      })
  }</LayoutItem>
}

LeftRoutables.propTypes = {
  side: PropTypes.string.isRequired,
  routables: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default LeftRoutables
