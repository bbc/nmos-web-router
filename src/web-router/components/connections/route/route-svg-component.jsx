import React, {PropTypes} from 'react'

let RouteSVG = ({top, state, width, height, children}) => {
  return <svg
    style={{top}}
    className={`route route-${state}`}
    viewBox={`0 0 ${width} ${height + 4}`}
    preserveAspectRatio='none'
    height={height + 4}
    xmlns='http://www.w3.org/2000/svg'>
    {children}
  </svg>
}

RouteSVG.propTypes = {
  top: PropTypes.number.isRequired,
  state: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  children: PropTypes.object.isRequired
}

export default RouteSVG
