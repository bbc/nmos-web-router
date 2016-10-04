import React from 'react'
import { Link } from 'react-router'

import Logo from './logo'
import Button from '../../components/button-component'

let Navigation = () => {
  return <div className='navigation'>
    <Link
      to='/'>
      <Logo />
    </Link>
    <Button
      name='nav'
      to='/web-router'
      label='WEB ROUTER' />
  </div>
}

export default Navigation
