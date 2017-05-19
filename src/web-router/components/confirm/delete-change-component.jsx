import React from 'react'
import { No } from '../../../gel-react/iconography'

let Delete = () => {
  let onClick = () => {
    console.log('You clicked a circle')
  }
  let Circle = () => {
    return <svg height='40' width='40'>
      <circle className='delete-circle'
        r='16'
        fill='red' />
    </svg>
  }

  return <div className='delete-button' onClick={function () { onClick() }}>
    <Circle />
    <No />
  </div>
}

export default Delete
