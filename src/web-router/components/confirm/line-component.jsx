import React from 'react'
import { Sandstorm } from '../../../gel-react/iconography'

let Line = () => {
  // Line length is a bit of a hack, it's deliberately too wide and is then restricted
  // by the width of the svg it is in
  return <div className='line-container'>
    <svg className='line-svg'>
      <line
        className={'line'}
        x1='0'
        y1='27'
        x2={250}
        y2='27' />
    </svg>
    <Sandstorm />
  </div>
}

export default Line
