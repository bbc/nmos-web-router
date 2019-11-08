import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Routables from './routables-component'
import AllVisible from './all-visible-component'
import Search from './search-component'
import saveCheckedRoutables from './save-checked-routables'
import ScrollWindowing from '../scroll-windowing/scroll-windowing'
import { ROUTABLE_ROW_HEIGHT } from '../scroll-windowing/constants'

const filterBySearchTerm = ({ stateString }) => !stateString.includes('fuzzymissmatch')

let Choose = ({view, senders, receivers, expanded, actions}) => {
  if (view.loading.restoredChecked.senders && view.loading.restoredChecked.receivers && view.useSessionStorage) {
    // Store the 'checked' state of each routable in browser memory so it can be restored
    // if the session is refreshed. Only do this once the web router has fully loaded.
    saveCheckedRoutables(senders, receivers)
  }

  // Filter senders and receivers by the search term
  const filteredSenders = senders.filter(filterBySearchTerm)
  const filteredReceivers = receivers.filter(filterBySearchTerm)

  const rowCount = Math.max(filteredSenders.length, filteredReceivers.length)

  return <Layout layouts='flush' className='box box-hidden' >
    <Search
      expanded={expanded}
      actions={actions}
      mode={view.routingMode}
      term={view.choose.term} />
    <AllVisible
      expanded={expanded}
      actions={actions}
      state={view.choose.allVisibleState} />
    <ScrollWindowing rowHeight={ROUTABLE_ROW_HEIGHT} rowCount={rowCount}>
      {({ getScrollProps, visibleStartRow, visibleEndRow, spacer }) => (
        <div className='routables routables-scroll' {...getScrollProps()}>
          {spacer}
          <Routables
            side='left'
            type='senders'
            routables={filteredSenders}
            actions={actions}
            expanded={expanded}
            visibleStartRow={visibleStartRow}
            visibleEndRow={visibleEndRow}
          />
          <Routables
            side='right'
            type='receivers'
            routables={filteredReceivers}
            actions={actions}
            expanded={expanded}
            visibleStartRow={visibleStartRow}
            visibleEndRow={visibleEndRow}
          />
        </div>
      )}
    </ScrollWindowing>
  </Layout>
}

Choose.propTypes = {
  view: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default Choose
