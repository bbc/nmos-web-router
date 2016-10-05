import React, { PropTypes } from 'react'

import Route from './route-component'

let Routes = ({view, data}) => {
  return <div>{view.routes.map((route, index) => {
    return <Route
      key={`route-${index}`}
      left={route.left}
      right={route.right}
      selector='.connections'
      />
  })}</div>
}

Routes.propTypes = {
  view: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
}

export default Routes
