import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import RightRoutable from './right-routable-component'

let RightRoutables = ({leftRoutables, rightRoutables, actions}) => {
  return <LayoutItem className='routables right' gels='1/3'>{
      rightRoutables.map(routable => {
        return <RightRoutable
          routable={routable}
          actions={actions}
          leftRoutables={leftRoutables}
          key={routable.id} />
      })
  }</LayoutItem>
}

RightRoutables.propTypes = {
  leftRoutables: PropTypes.array.isRequired,
  rightRoutables: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default RightRoutables
