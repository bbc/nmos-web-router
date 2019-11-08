import React, {PropTypes} from 'react'

let half = ({x1, width, side}) => {
  x1 = x1 || 0
  let x2 = width / 2
  if (side === 'right') {
    x1 = width / 2
    x2 = width
  }
  return <line
    className='line half'
    x1={x1}
    y1='0'
    x2={x2}
    y2='0'
  />
}

half.propTypes = {
  x1: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  side: PropTypes.string.isRequired
}

export default half
