import './web-router.css'

import React, { PropTypes } from 'react'

import Header from './header-component'
import Connections from './connections'
import Confirmation from './confirmation'

let WebRouter = ({data, view, sides, actions}) => {
  let webRouterContainer = document.querySelector('.web-router-container')
  if (webRouterContainer !== null && view.scroll) {
    webRouterContainer.scrollTop = 0
  }

  let page = view.page
  let layout = view.layout
  return <div className={`web-router web-router-${page}`}>
    <Header />
    <div
      className='web-router-container gel-layout'
      onScroll={actions.updateConnections}
      >
      <Connections
        data={data}
        view={view.connections}
        actions={actions}
        sides={sides}
        layout={layout}
        />
      <Confirmation
        data={data}
        view={view.confirmation}
        actions={actions}
        sides={sides}
        layout={layout}
        />
    </div>
  </div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  sides: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
