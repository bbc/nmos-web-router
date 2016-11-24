import React from 'react'
import { Link } from 'react-router'

import Logo from './logo'
import { Layout, LayoutItem } from '../../gel-react/grid'

let Navigation = () => {
  return <div>
    <div className='navigation-background' />
    <Layout className='navigation' layouts='flush'>
      <Layout gels='9/12'>
        <LayoutItem>
          <Link
            to='/'>
            <Logo />
          </Link>
        </LayoutItem>
      </Layout>
      <Layout gels='3/12'>
        <Link
          style={{
            width: '100%',
            textAlign: 'center'
          }}
          to='/web-router'
          className='button nav'>
          WEB ROUTER
        </Link>
      </Layout>
    </Layout>
  </div>
}

export default Navigation
