import React from 'react'
import { Link } from 'react-router'

import Logo from './logo'
import { Layout, LayoutItem } from '../../gel-react/grid'
import Button from '../../components/button-component'

let Navigation = () => {
  return <Layout className='navigation' layouts='flush'>
    <Layout gels='9/12'>
      <LayoutItem>
        <Link
          to='/'>
          <Logo />
        </Link>
      </LayoutItem>
    </Layout>
    <Layout gels='3/12'>
      <Button
        fill
        name='nav'
        to='/web-router'
        label='WEB ROUTER' />
    </Layout>
  </Layout>
}

export default Navigation
