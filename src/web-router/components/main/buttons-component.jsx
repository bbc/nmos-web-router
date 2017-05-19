import React, { PropTypes } from 'react'
import {Link} from 'react-router'

let Buttons = ({term, mode, location}) => {
  let routeButtonDestination = 'route'
  let width = window.innerWidth
  if (width >= 1000 && width < 1400) {
    routeButtonDestination = location.replace('/', '')
  }

  let confirmButtonDestination = 'confirm'
  if (mode === 'automatic' && width < 1000) {
    confirmButtonDestination = location.replace('/', '')
  }

  return <div className='buttons-container'>
    <div className='buttons'>
      <Link
        to={`/web-router/${mode}/choose?search=${term}`}
        className='button choose-nav left-nav nav-1/3'>
        <span className='label'>CHOOSE</span>
      </Link>
      <Link
        to={`/web-router/${mode}/${routeButtonDestination}?search=${term}`}
        className='button route-nav center-nav nav-1/3'>
        <span className='label'>ROUTE</span>
      </Link>
      <Link
        to={`/web-router/${mode}/${confirmButtonDestination}?search=${term}`}
        className='button confirm-nav right-nav nav-1/3'>
        <span className='label'>CONFIRM</span>
      </Link>
    </div>
  </div>
}

Buttons.propTypes = {
  term: PropTypes.string,
  mode: PropTypes.string.isRequired,
  location: PropTypes.string
}

export default Buttons
