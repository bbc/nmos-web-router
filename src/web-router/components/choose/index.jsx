import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Routables from './routables-component'
import Header from '../shared/header-component'
import AllVisible from './all-visible-component'
import Search from './search-component'

let Choose = ({view, senders, receivers, expanded, actions}) => {
  return <Layout className='box box-hidden' >
    <Search
      expanded={expanded}
      actions={actions}
      term={view.term} />
    <Header />
    <AllVisible
      expanded={expanded}
      actions={actions}
      state={view.allVisibleState} />
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
