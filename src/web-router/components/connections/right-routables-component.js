import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import RightRoutable from './right-routable-component'

let RightRoutables = ({routables}) => {
  return <LayoutItem className='routables right' gels='1/3'>{
      routables.map(routable => {
        return <RightRoutable
          routable={routable}
          key={routable.id} />
      })
  }</LayoutItem>
}

RightRoutables.propTypes = {
  routables: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default RightRoutables
