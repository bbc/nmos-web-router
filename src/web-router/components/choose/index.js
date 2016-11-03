import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Routables from './routables-component'

let Choose = ({senders, receivers, actions}) => {
  return <Layout className='box' >
    <Layout gels='1/1'>
      <Routables
        side='left'
        routables={senders}
        />
      <Routables
        side='right'
        routables={receivers}
        />
    </Layout>
  </Layout>
}

Choose.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Choose
