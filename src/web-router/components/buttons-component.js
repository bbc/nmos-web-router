import React from 'react'
import Button from '../../components/button-component'

export default () => {
  return <div className='buttons-container'>
    <div className='buttons'>
      <Button
        to='/web-router/choose'
        fill
        className='choose-nav left-nav nav-1/2'
        label='CHOOSE' />
      <Button
        to='/web-router/route'
        fill
        className='route-nav right-nav nav-1/2'
        label='ROUTE' />
    </div>
  </div>
}
