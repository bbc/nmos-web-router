import React, { PropTypes } from 'react'
import Button from '../../../components/button-component'

let Buttons = ({term}) => {
  return <div className='buttons-container'>
    <div className='buttons'>
      <Button
        to='/web-router/choose'
        query={{search: term}}
        fill
        className='choose-nav left-nav nav-1/2'
        label='CHOOSE' />
      <Button
        to='/web-router/route'
        query={{search: term}}
        fill
        className='route-nav right-nav nav-1/2'
        label='ROUTE' />
    </div>
  </div>
}

Buttons.propTypes = {
  term: PropTypes.string
}

export default Buttons
