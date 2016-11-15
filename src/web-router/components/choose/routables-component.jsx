import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../shared/routable-component'

let Routables = ({routables, side, actions, expandedSender, type}) => {
  return <LayoutItem gels='1/2' className={`routables-${side}`}>
    <div>{
      routables.map((routable, index) => {
        routable.type = routable.type || type
        return <Routable
          key={`${side}-${index}`}
          baseState='static'
          checkbox
          routable={routable}
          onCheckbox={function () {
            if (!expandedSender.state.includes('contracted')) actions.toggleSender(expandedSender)
            actions.check(routable)
          }}
          />
      })
    }</div>
  </LayoutItem>
}

Routables.propTypes = {
  routables: PropTypes.array.isRequired,
  side: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expandedSender: PropTypes.object.isRequired
}

export default Routables
