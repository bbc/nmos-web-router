import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Routables from './routables-component'
import AllVisible from './all-visible-component'
import Search from './search-component'
import saveCheckedRoutables from './save-checked-routables'

let Choose = ({view, senders, receivers, expanded, actions}) => {
  if (view.loading.restoredChecked.senders && view.loading.restoredChecked.receivers && view.useSessionStorage) {
    // Store the 'checked' state of each routable in browser memory so it can be restored
    // if the session is refreshed. Only do this once the web router has fully loaded.
    saveCheckedRoutables(senders, receivers)
  }
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
    <div className='routables routables-scroll'>
      <Routables
        side='left'
        type='senders'
        routables={senders}
        actions={actions}
        expanded={expanded}
        />
      <Routables
        side='right'
        type='receivers'
        routables={receivers}
        actions={actions}
        expanded={expanded}
        />
    </div>
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
