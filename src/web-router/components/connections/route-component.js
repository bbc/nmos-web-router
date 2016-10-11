import React, { PropTypes } from 'react'

const Route = ({left, right, selector, status}) => {
  if (!left.hasOwnProperty('dimensions') || !right.hasOwnProperty('dimensions')) return null
  let routesElement = document.querySelector(selector)
  let routesElementRects = { top: 0 }
  if (routesElement !== null) routesElementRects = routesElement.getClientRects().item(0)
  else return null

  let leftyHeight = Math.abs(left.dimensions.y[1] - left.dimensions.y[0]) / 2
  let leftyTop = left.dimensions.y[0] + leftyHeight - routesElementRects.top - window.scrollY

  let rightyHeight = Math.abs(right.dimensions.y[1] - right.dimensions.y[0]) / 2
  let rightyTop = right.dimensions.y[0] + rightyHeight - routesElementRects.top - window.scrollY

  let y1 = '100%'
  let y2 = '0'

  let top = rightyTop
  if (leftyTop <= rightyTop) {
    top = leftyTop
    y1 = 0
    y2 = '100%'
  }

  let height = Math.abs(rightyTop - leftyTop) + 4

  let contractionStatus = 'contracted'
  if (!left.contracted || !right.contracted) contractionStatus = 'expanded'

  return <svg
    className={`route ${contractionStatus} ${status}`}
    style={{
      top: top,
      left: left.dimensions.x[1],
      width: right.dimensions.x[0] - left.dimensions.x[1]
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
  selector: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
}

export default Route
