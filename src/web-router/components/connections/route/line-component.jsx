import React, {PropTypes} from 'react'

let Line = ({width}) => {
  return <line
    className='line'
    x1='0'
    y1='0'
    x2={width}
    y2='0'
    />
}

Line.propTypes = {
  width: PropTypes.number.isRequired
}

export default Line
