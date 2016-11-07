import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../routable'

let Routables = ({routables, side, actions, expandedSender}) => {
  return <LayoutItem gels='1/2' className={`routables-${side}`}>
    <div>{
      routables.map((routable, index) => {
        return <Routable
          baseState='static'
          checkbox
          key={`${side}-${index}`}
          routable={routable}
          actions={actions}
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
  actions: PropTypes.object.isRequired,
  expandedSender: PropTypes.object.isRequired
}

export default Routables
