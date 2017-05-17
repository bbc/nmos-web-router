import React, { PropTypes } from 'react'
import {Link} from 'react-router'

let Buttons = ({term, mode}) => {
  return <div className='buttons-container'>
    <div className='buttons'>
      <Link
        to={`/web-router/${mode}/choose?search=${term}`}
        className='button choose-nav left-nav nav-1/3'>
        <span className='label'>CHOOSE</span>
      </Link>
      <Link
        to={`/web-router/${mode}/route?search=${term}`}
        className='button route-nav center-nav nav-1/3'>
        <span className='label'>ROUTE</span>
      </Link>
      <Link
        to={`/web-router/${mode}/confirm?search=${term}`}
        className='button confirm-nav right-nav nav-1/3'>
        <span className='label'>CONFIRM</span>
      </Link>
    </div>
  </div>
}

Buttons.propTypes = {
  term: PropTypes.string,
  mode: PropTypes.string.isRequired
}

export default Buttons
