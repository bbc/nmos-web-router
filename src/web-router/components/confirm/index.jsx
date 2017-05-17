import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from '../shared/header-component'

let Confirm = (view) => {
  return <Layout className='box box-hidden'>
    <Header />
  </Layout>
}

Confirm.PropTypes = {
  view: PropTypes.object.isRequired
}

export default Confirm
