import './main.css'

import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { DoublePica } from '../../../gel-react/typography'
import Connections from '../connections'
import ExpandedSender from '../connections/expanded-sender-component'
import Choose from '../choose'
import Buttons from './buttons-component'
import Confirm from '../confirm'
import ConfirmMode from './confirm-changes-component'

let WebRouter = ({view, actions}) => {
  let Expanded = null
  let isExpanded = view.expanded.state && view.expanded.state.includes('expanded')
  if (isExpanded) {
    Expanded = <ExpandedSender
      sender={view.expanded}
      actions={actions}
      />
  }

  return <div className='main'>
    <Buttons
      term={view.choose.term}
      mode={view.routingMode}
      location={view.location || ''}
      />
    <div className='container choose-view left'>
      <LayoutItem><DoublePica>Choose</DoublePica></LayoutItem>
      <Choose
        view={view}
        senders={view.senders}
        receivers={view.receivers}
        expanded={view.expanded}
        actions={actions}
        />
    </div>
    <div className='container route-view center'>
      <Layout className='route-view-layout'>
        <LayoutItem><DoublePica>Route</DoublePica></LayoutItem>
        <Connections
          routesEl={view.routesEl}
          expanded={view.expanded}
          senders={view.senders}
          receivers={view.receivers}
          routes={view.routes}
          actions={actions}
          />
        <LayoutItem className='confirm-mode-container'>
          <ConfirmMode
            view={view}
            actions={actions} />
        </LayoutItem>
      </Layout>
    </div>
    <div className='expanded-sender-container route-view center'>
      {Expanded}
    </div>
    <div className='container confirm-view right'>
      <LayoutItem><DoublePica>Confirm</DoublePica></LayoutItem>
      <Confirm
        senders={view.senders}
        receivers={view.receivers}
        actions={actions} />
    </div>
  </div>
}

WebRouter.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
