import React, {PropTypes} from 'react'

let Path = ({x1, y1, y2, width, height}) => {
  return <path
    className='line'
    d={`M${x1} ${y1} C ${width / 2} ${y1}, ${width / 2} ${y2}, ${width} ${y2}`}
    />
}

Path.propTypes = {
  x1: PropTypes.number.isRequired,
  y1: PropTypes.number.isRequired,
  y2: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}

export default Path
