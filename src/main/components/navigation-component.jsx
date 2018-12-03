import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Signin from './signin-component'
import Logo from './logo'
import { Layout, LayoutItem } from '../../gel-react/grid'
// import { SignIn } from '../../gel-react/iconography'

let Navigation = ({actions}) => {
  return <div>
    <div className='navigation-background' />
    <Layout className='navigation' layouts='flush'>
      <Layout layouts='left'>
        <LayoutItem gels='2/12' >
          <Link
            to='/'>
            <Logo />
          </Link>
        </LayoutItem>
      </Layout>
      <Layout layouts='center'>
        <LayoutItem gels='5/24'>
          <Signin actions={actions} />
        </LayoutItem>
      </Layout>
      <Layout layouts='right'>
        <LayoutItem gels='2/12'>
          <Link
            to='/web-router'
            className='button nav'>
            WEB ROUTER
          </Link>
        </LayoutItem>
      </Layout>
    </Layout>
  < /div>
}

Navigation.propTypes = {
  actions: PropTypes.object.isRequired
}

export default Navigation
