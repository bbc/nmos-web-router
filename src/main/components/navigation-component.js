import React from 'react'
import { Link } from 'react-router'

import Logo from './logo'
import { Layout, LayoutItem } from '../../gel-react/grid'
import Button from '../../components/button-component'

let Navigation = () => {
  return <Layout className='navigation'>
    <LayoutItem gels='1/2'>
      <Link
        to='/'>
        <Logo />
      </Link>
    </LayoutItem>
    <Layout gels='1/2' layouts='right'>
      <LayoutItem>
        <Button
          name='nav'
          to='/web-router'
          label='WEB ROUTER' />
      </LayoutItem>
    </Layout>
  </Layout>
}

export default Navigation
