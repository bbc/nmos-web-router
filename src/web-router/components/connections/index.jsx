import './connections.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from './header-component'
import Senders from './senders-component'
import Routes from './routes-component'
import Receivers from './receivers-component'
import ChangeMode from './change-mode-component'
import ScrollWindowing from '../scroll-windowing/scroll-windowing'
import { ROUTABLE_ROW_HEIGHT } from '../scroll-windowing/constants'

/**
 * This component displays all the chosen Senders, Receivers and the
 * routes between them.
 *
 * The following optimisations have been applied to keep rendering quick
 * when there are a large amount of Senders or Receivers:
 *
 * 1. Filter the `senders` and `receivers` by their `unchecked` state,
 *    so that only chosen routables are rendered to the DOM.
 * 2. The elements are windowed, so only those visible to the user are
 *    re-rendered on scroll.
 */

const filterByUnchecked = ({ stateString }) => !stateString.includes('unchecked')

let Connections = ({expanded, senders, receivers, routes, actions, routingMode, changes, location, choose}) => {
  // Filter the senders and receivers
  const filteredSenders = senders.filter(filterByUnchecked)
  const filteredReceivers = receivers.filter(filterByUnchecked)

  return <Layout className='connections box box-hidden connections-box'
    onClick={function () { if (!expanded.state.includes('contracted')) actions.toggleSender(expanded) }}>
    <ChangeMode
      changes={changes}
      routingMode={routingMode}
      location={location}
      choose={choose}
      actions={actions} />
    <Header />
    <ScrollWindowing rowHeight={ROUTABLE_ROW_HEIGHT}>
      {({ getScrollProps, visibleStartRow, visibleEndRow }) => (
        <div className='routables-scroll' {...getScrollProps({
          onScroll: () => {
            if (expanded.state.length > 0 && !expanded.state.includes('contracted')) {
              actions.update()
            }
          }
        })}>
          <Layout gels='1/1' layouts='flush'>
            <Senders
              senders={filteredSenders}
              actions={actions}
              visibleStartRow={visibleStartRow}
              visibleEndRow={visibleEndRow}
              />
            <Receivers
              senders={senders}
              receivers={filteredReceivers}
              actions={actions}
              routingMode={routingMode}
              changes={changes}
              visibleStartRow={visibleStartRow}
              visibleEndRow={visibleEndRow}
              />
            <Routes
              routes={routes}
              actions={actions}
              expanded={expanded}
              />
          </Layout>
        </div>
      )}
    </ScrollWindowing>
  </Layout>
}

Connections.propTypes = {
  expanded: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  routingMode: PropTypes.string.isRequired,
  changes: PropTypes.array.isRequired,
  location: PropTypes.string.isRequired,
  choose: PropTypes.object.isRequired
}

export default Connections
