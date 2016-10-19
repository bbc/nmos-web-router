import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import LeftRoutable from './left-routable-component'

let LeftRoutables = ({routables, actions}) => {
  return <LayoutItem className='routables left' gels='1/3'>{
      routables.map(routable => {
        return <LeftRoutable
          routable={routable}
          actions={actions}
          key={routable.id} />
      })
  }</LayoutItem>
}

LeftRoutables.propTypes = {
  routables: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default LeftRoutables
