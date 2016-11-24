import React, { PropTypes } from 'react'
import {Link} from 'react-router'

let Buttons = ({term}) => {
  return <div className='buttons-container'>
    <div className='buttons'>
      <Link
        to='/web-router/choose'
        query={{search: term}}
        className='button choose-nav left-nav nav-1/2'>
        <span className='label'>CHOOSE</span>
      </Link>
      <Link
        to='/web-router/route'
        query={{search: term}}
        className='button route-nav right-nav nav-1/2'>
        <span className='label'>ROUTE</span>
      </Link>
    </div>
  </div>
}

Buttons.propTypes = {
  term: PropTypes.string
}

export default Buttons
