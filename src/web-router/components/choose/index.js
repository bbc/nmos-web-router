import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Routables from './routables-component'
import Header from '../header-component'
import AllVisible from './all-visible-component'
import Search from './search-component'

let Choose = ({term, senders, receivers, actions}) => {
  return <Layout className='box box-hidden' >
    <Search
      search={actions.search}
      term={term} />
    <Header />
    <AllVisible />
    <div className='routables'>
      <Routables
        side='left'
        routables={senders}
        />
      <Routables
        side='right'
        routables={receivers}
        />
    </div>
  </Layout>
}

Choose.propTypes = {
  term: PropTypes.string.isRequired,
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Choose
