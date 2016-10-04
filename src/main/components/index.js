import './main.css'

import React, { PropTypes } from 'react'

import { Wrap } from '../../gel-react/grid'

import Navigation from './navigation-component'
import Welcome from './welcome-compoment'

let Main = ({children}) => {
  children = children || <Welcome />
  return <div className='main'>
    <Navigation />
    <Wrap>{children}</Wrap>
  </div>
}

Main.propTypes = {
  children: PropTypes.object
}

export default Main
