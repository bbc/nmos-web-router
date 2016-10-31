import './web-router.css'

import React, { PropTypes } from 'react'
import Connections from './connections'
import { DoublePica } from '../../gel-react/typography'
import { LayoutItem } from '../../gel-react/grid'

let WebRouter = ({data, view, actions}) => {
  let webRouterContainer = document.querySelector('.web-router-container')
  if (webRouterContainer !== null && view.scroll) webRouterContainer.scrollTop = 0

  return <div className='web-router web-router/choose/route/confirm'>
    <div className='container choose left'></div>
    <div className='container route center'>
      <LayoutItem><DoublePica>Route</DoublePica></LayoutItem>
      <Connections
        view={view.connections}
        actions={actions}
        />
    </div>
    <div className='container confirm right'>CONFIRM</div>
  </div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
