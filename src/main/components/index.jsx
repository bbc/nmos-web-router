import './main.css'

import React, { PropTypes } from 'react'

import { Wrap, Layout } from '../../gel-react/grid'

import Navigation from './navigation-component'
import Welcome from './welcome-component'

let Main = ({children}) => {
  children = children || <Welcome />
  return <Wrap>
    <Navigation />
    <Layout>{children}</Layout>
  </Wrap>
}

Main.propTypes = {
  children: PropTypes.object
}

export default Main
