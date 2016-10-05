import React, { PropTypes } from 'react'

const Route = ({left, right, selector}) => {
  if (
    !left.hasOwnProperty('x') || !left.hasOwnProperty('y') ||
    !right.hasOwnProperty('x') || !right.hasOwnProperty('y')
  ) return null
  let routesElement = document.querySelector(selector)
  let routesElementRects = { top: 0 }
  if (routesElement !== null) routesElementRects = routesElement.getClientRects().item(0)
  else return null

  let leftyHeight = Math.abs(left.y[1] - left.y[0]) / 2
  let leftyTop = left.y[0] + leftyHeight - routesElementRects.top - window.scrollY

  let rightyHeight = Math.abs(right.y[1] - right.y[0]) / 2
  let rightyTop = right.y[0] + rightyHeight - routesElementRects.top - window.scrollY

  let y1 = '100%'
  let y2 = '0'

  let top = rightyTop
  if (leftyTop <= rightyTop) {
    top = leftyTop
    y1 = 0
    y2 = '100%'
  }

  let height = Math.abs(rightyTop - leftyTop) + 4

  return <svg
    className='route'
    style={{
      top: top
    }}
    height={height}
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'>
    <line
      className='line'
      x1={0}
      x2='100%'
      y1={y1}
      y2={y2}
      />
  </svg>
}

Route.propTypes = {
  left: PropTypes.object.isRequired,
  right: PropTypes.object.isRequired,
  selector: PropTypes.string.isRequired
}

export default Route
