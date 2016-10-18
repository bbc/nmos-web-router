import React, { PropTypes } from 'react'

import Routable from '../routable'

function getView (routable, view) {
  return view.filter(v => {
    return v.id === routable.id
  })[0]
}

let Routables = ({side, routables, view, actions}) => {
  return <div>{
    routables.map((routable, index) => {
      let routableView = getView(routable, view)
      let baseId = 'connections'
      return <Routable
        key={`connections-${routable.id}`}
        draggable
        baseId={baseId}
        data={routable}
        view={routableView}
        actions={{
          remove: actions.remove,
          toggle () {
            if (routableView.routable) actions.toggleConnections(side, routable.id)
          },
          mounted: actions.updateConnections,
          drag (evt, data, status) { }
        }}
      />
    })
  }</div>
}

Routables.propTypes = {
  side: PropTypes.string.isRequired,
  routables: PropTypes.array.isRequired,
  view: PropTypes.array.isRequired,

  actions: PropTypes.object.isRequired
}

export default Routables
