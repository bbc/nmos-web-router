import React, { PropTypes } from 'react'

let PointMouse = ({isDragging, mouse}) => {
  let display = isDragging ? 'block' : 'none'
  return <div
    className='point point-mouse'
    style={{
      left: `${mouse.x}px`,
      top: `${mouse.y}px`,
      display
    }} />
}

PointMouse.propTypes = {
  isDragging: PropTypes.bool.isRequired,
  mouse: PropTypes.object.isRequired
}

export default PointMouse
