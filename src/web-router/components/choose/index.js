import './choose.css'

import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Routables from './routables-component'

let Choose = ({senders, receivers, actions}) => {
  return <Layout className='box' >
    <Layout gels='1/1' layouts='flush'>
      <Routables
        side='left'
        routables={senders}
        />
      <LayoutItem gels='2/10' />
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
