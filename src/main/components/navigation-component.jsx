import React from 'react'
import { Link } from 'react-router'
import Logo from './logo'
import { Layout, LayoutItem } from '../../gel-react/grid'

let Navigation = () => {
  return <div>
    <div className='navigation-background' />
    <Layout className='navigation' layouts='flush'>
      <Layout gels='10/12'>
        <LayoutItem>
          <Link
            to='/'>
            <Logo />
          </Link>
        </LayoutItem>
      </Layout>
    </Layout>
  < /div>
}

export default Navigation
