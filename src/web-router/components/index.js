import './web-router.css'

import React, { PropTypes } from 'react'
import { Wrap, Layout } from '../../gel-react/grid'
import Connections from './connections'

let WebRouter = ({data, view, sides, actions}) => {
  let webRouterContainer = document.querySelector('.web-router-container')
  if (webRouterContainer !== null && view.scroll) {
    webRouterContainer.scrollTop = 0
  }

  return <Layout className={'web-router web-router-connectons'}>
    <Layout gels='1/1'>
      <Wrap className='web-router-container'>
        <Connections
          view={view.connections}
          actions={actions}
          sides={sides}
          />
      </Wrap>
    </Layout>
  </Layout>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  sides: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
