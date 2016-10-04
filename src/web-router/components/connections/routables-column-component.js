import React, { PropTypes } from 'react'
import Routables from './routables-component'

let RoutablesColumn = ({routables, view, actions, side, sideName}) => {
  return <div className={`gel-layout__item gel-1/3 ${sideName}`}>
    <Routables
      routables={routables}
      view={view}
      actions={actions}
      side={side}
      />
  </div>
}

RoutablesColumn.propTypes = {
  routables: PropTypes.array.isRequired,
  view: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  side: PropTypes.string.isRequired,
  sideName: PropTypes.string.isRequired
}

export default RoutablesColumn
