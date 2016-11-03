import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from './routable-component'
import AllVisible from './all-visible-component'

let Routables = ({routables, side}) => {
  return <LayoutItem gels='1/2' className={`routables-${side}`}>
    <AllVisible />
    <div>{
      routables.map((routable, index) => {
        return <Routable
          key={`${side}-${index}`}
          routable={routable}
          />
      })
    }</div>
  </LayoutItem>
}

Routables.propTypes = {
  routables: PropTypes.array.isRequired,
  side: PropTypes.string.isRequired
}

export default Routables
