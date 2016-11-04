import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Routables from './routables-component'
import Header from '../header-component'
import AllVisible from './all-visible-component'
import Search from './search-component'

let Choose = ({view, senders, receivers, actions}) => {
  return <Layout className='box box-hidden' >
    <Search
      search={actions.search}
      term={view.term} />
    <Header />
    <AllVisible
      allVisible={actions.allVisible}
      state={view.allVisibleState} />
    <div className='routables routables-scroll'>
      <Routables
        side='left'
        routables={senders}
        actions={actions}
        />
      <Routables
        side='right'
        routables={receivers}
        actions={actions}
        />
    </div>
  </Layout>
}

Choose.propTypes = {
  view: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Choose
