import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Routables from './routables-component'
import Header from '../header-component'

let Choose = ({senders, receivers, actions}) => {
  return <Layout className='box box-hidden' >
    <Header />
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
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Choose
