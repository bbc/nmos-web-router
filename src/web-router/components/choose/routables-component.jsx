import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

let Routables = ({routables, side, actions, expanded, type}) => {
  return <LayoutItem gels='1/2' className={`routables-${side}`}>
    <div>{
      routables.map((routable, index) => {
        return <Routable
          key={`${side}-${index}-${routable.id}`}
          baseState='static'
          checkbox
          routable={routable}
          onCheckbox={function () {
            if (!expanded.state.includes('contracted')) actions.toggleSender(expanded)
            actions.check(routable, type)
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
  expanded: PropTypes.object.isRequired
}

export default Routables
