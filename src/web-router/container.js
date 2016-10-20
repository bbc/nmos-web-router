import React, { PropTypes } from 'react'

import Loading from './components/loading'
import WebRouter from './components'

let WebRouterContainer = ({ initialised, data, view, actions }) => {
  if (!initialised) actions.initialise()
  if (view.loading.notLoaded.length > 0 || view.loading.errored.length > 0) return <Loading view={view.loading} />
  return <WebRouter
    data={data}
    view={view}
    actions={actions}
    />
}

WebRouterContainer.propTypes = {
  initialised: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouterContainer
