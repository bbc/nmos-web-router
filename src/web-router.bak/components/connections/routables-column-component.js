import React, { PropTypes } from 'react'
import Routables from './routables-component'
import { LayoutItem } from '../../../gel-react/grid'

let RoutablesColumn = ({routables, view, actions, side, sideName}) => {
  return <LayoutItem className={sideName} gels='1/3'>
    <Routables
      routables={routables}
      view={view}
      actions={actions}
      side={side}
      />
  </LayoutItem>
}

RoutablesColumn.propTypes = {
  routables: PropTypes.array.isRequired,
  view: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  side: PropTypes.string.isRequired,
  sideName: PropTypes.string.isRequired
}

export default RoutablesColumn
