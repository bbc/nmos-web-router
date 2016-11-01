import './web-router.css'

import React, { PropTypes } from 'react'
import Connections from './connections'
import { DoublePica } from '../../gel-react/typography'
import { LayoutItem } from '../../gel-react/grid'
import Buttons from './buttons-component'
import ExpandedSender from './connections/expanded-sender-component'

let WebRouter = ({data, view, actions}) => {
  return <div className={`web-router web-router${view.location}`}>
    <Buttons />
    <div className='container choose left'>
      <LayoutItem><DoublePica>Choose</DoublePica></LayoutItem>
    </div>
    <div className='container route center'>
      <LayoutItem><DoublePica>Route</DoublePica></LayoutItem>
      <Connections
        view={view.connections}
        actions={actions}
        />
    </div>
    <div className='expanded-sender-container route center'>
      <ExpandedSender
        sender={view.connections.expandedSender}
        actions={actions}
        />
    </div>
    <div className='container confirm right'>
      <LayoutItem><DoublePica>Confirm</DoublePica></LayoutItem>
    </div>
  </div>
}

WebRouter.propTypes = {
  data: PropTypes.object.isRequired,
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
