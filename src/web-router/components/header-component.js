import React from 'react'

import Button from '../../components/button-component'

import { Fullscreen, ExitFullscreen } from '../../gel-react/iconography'

let Header = () => {
  return <div className='header gel-layout'>
    <div className='title'>
      <h2 className='gel-layout__item gel-1/4 gel-double-pica'>Web Router</h2>
      <div className={'gel-layout__item gel-3/4 buttons'}>
        <Button
          to='/web-router/confirmation'
          label='confirmation'
          name='layout'
          icon={<Fullscreen />} />
        <Button
          to='/web-router/connections'
          name='layout'
          label='connections'
          icon={<Fullscreen />} />
        <Button
          to={'/web-router/connections/confirmation'}
          name='layout'
          label='split'
          icon={<ExitFullscreen />} />
      </div>
    </div>
  </div>
}

export default Header
