import React, {PropTypes} from 'react'
import { Sandstorm } from '../../../gel-react/iconography'

let Line = ({type}) => {
  // This only gets calculated thanks to the global timer tick (an accident)
  // Therefore length of line is buggy but not too important
  let routesEl = document.querySelector('.lines-holder')
  let lineWidth = 100
  if (routesEl) {
    let routesRects = routesEl.getBoundingClientRect()
    lineWidth = routesRects.width * 2
  }
  return <div className='line-container'>
    <svg height='40'>
      <line
        className={`line ${type}`}
        x1='0'
        y1='27'
        x2={lineWidth}
        y2='27' />
    </svg>
    <Sandstorm />
  </div>
}

Line.propTypes = {
  type: PropTypes.string
}

export default Line
