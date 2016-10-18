import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'

let Routables = ({side, routables, actions}) => {
  return <LayoutItem className={`routables ${side}`} gels='1/3'>{
      routables.map(routable => {
        return <div key={routable.id}>{routable.label}</div>
      })
  }</LayoutItem>
}

Routables.propTypes = {
  side: PropTypes.string.isRequired,
  routables: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Routables
