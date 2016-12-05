import './main.css'

import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import { DoublePica } from '../../../gel-react/typography'
import Connections from '../connections'
import ExpandedSender from '../connections/expanded-sender-component'
import Choose from '../choose'
import Buttons from './buttons-component'

let WebRouter = ({view, actions}) => {
  return <div className='main'>
    <Buttons
      term={view.choose.term}
      />
    <div className='container choose left'>
      <LayoutItem><DoublePica>Choose</DoublePica></LayoutItem>
      <Choose
        view={view.choose}
        senders={view.senders}
        receivers={view.receivers}
        expanded={view.expanded}
        actions={actions}
        />
    </div>
    <div className='container route center'>
      <LayoutItem><DoublePica>Route</DoublePica></LayoutItem>
      <Connections
        routesEl={view.routesEl}
        expanded={view.expanded}
        senders={view.senders}
        receivers={view.receivers}
        routes={view.routes}
        actions={actions}
        />
    </div>
    <div className='expanded-sender-container route center'>
      <ExpandedSender
        sender={view.expanded}
        actions={actions}
        />
    </div>
    <div className='container confirm right'>
      <LayoutItem><DoublePica>Confirm</DoublePica></LayoutItem>
    </div>
  </div>
}

WebRouter.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
