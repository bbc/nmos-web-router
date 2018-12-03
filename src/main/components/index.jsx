import './main.css'

import React, { PropTypes } from 'react'

import { Wrap, Layout } from '../../gel-react/grid'

import Navigation from './navigation-component'
import Welcome from './welcome-component'

let Main = ({children, actions}) => {
  children = children || <Welcome />
  return <Wrap>
    <Layout>{children}</Layout>
    <Navigation actions={actions} />
  < /Wrap>
}

Main.propTypes = {
  children: PropTypes.object,
  actions: PropTypes.object.isRequired
}

export default Main
