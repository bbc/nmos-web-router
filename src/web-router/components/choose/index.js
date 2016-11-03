import './choose.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'

let Connections = ({view, actions}) => {
  return <Layout className='box' >
    <Layout gels='1/1' layouts='flush'>
      CHOOSE
    </Layout>
  </Layout>
}

Connections.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Connections
