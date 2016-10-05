import React from 'react'
import { Link } from 'react-router'

import Logo from './logo'
import { Layout, LayoutItem } from '../../gel-react/grid'
import Button from '../../components/button-component'

let Navigation = () => {
  return <Layout className='navigation' layouts='flush'>
    <Layout gels='1/2'>
      <LayoutItem>
        <Link
          to='/'>
          <Logo />
        </Link>
      </LayoutItem>
    </Layout>
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
