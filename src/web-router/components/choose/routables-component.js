import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from './routable-component'

let Routables = ({routables, side, actions}) => {
  return <LayoutItem gels='1/2' className={`routables-${side}`}>
    <div>{
      routables.map((routable, index) => {
        return <Routable
          key={`${side}-${index}`}
          routable={routable}
          check={actions.check}
          />
      })
    }</div>
  </LayoutItem>
}

Routables.propTypes = {
  routables: PropTypes.array.isRequired,
  side: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default Routables
