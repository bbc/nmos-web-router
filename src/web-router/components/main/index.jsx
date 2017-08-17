import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import { DoublePica } from '../../../gel-react/typography'
import Connections from '../connections'
import ExpandedSender from '../connections/expanded-sender-component'
import Choose from '../choose'
import Buttons from './buttons-component'
import Confirm from '../confirm'

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
      <LayoutItem><DoublePica>Route</DoublePica></LayoutItem>
      <Connections
        routesEl={view.routesEl}
        expanded={view.expanded}
        senders={view.senders}
        receivers={view.receivers}
        routes={view.routes}
        actions={actions}
        routingMode={view.routingMode}
        changes={view.changes}
        location={view.location || ''}
        choose={view.choose}
        />
    </div>
    <div className='expanded-sender-container route-view center'>
      {Expanded}
    </div>
    <div className='container confirm-view right'>
      <LayoutItem><DoublePica>Confirm</DoublePica></LayoutItem>
      <Confirm
        loading={view.loading}
        changes={view.changes}
        actions={actions}
        senders={view.senders}
        useSessionStorage={view.useSessionStorage} />
    </div>
  </div>
}

WebRouter.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default WebRouter
