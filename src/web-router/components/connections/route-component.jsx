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

let Route = ({data, expanded}) => {
  let routesEl = document.querySelector('.routes')
  if (routesEl === null) return null

  let senderEl = document.getElementById(data.sender.id)
  if (expanded) senderEl = document.querySelector('.expanded-sender')

  if (senderEl === null) return null
  let senderNodeEl = senderEl.querySelector('.node')

  let receiverEl = document.getElementById(data.receiver.id)
  if (receiverEl === null) return null
  let receiverNodeEl = receiverEl.querySelector('.node')

  let senderRects = senderNodeEl.getBoundingClientRect()
  let receiverRects = receiverNodeEl.getBoundingClientRect()
  let routesRects = routesEl.getBoundingClientRect()

  let width = routesRects.width
  let height = Math.abs(senderRects.top - receiverRects.top)

  let className = `route route-${data.state}`

  let x1 = 0
  let y1 = height
  let y2 = 0
  let top = receiverRects.top
  if (senderRects.top < receiverRects.top) {
    top = senderRects.top
    y2 = height
    y1 = 0
  }

  let LineComponent = Path
  if (y1 === y2) LineComponent = Line

  if (expanded) {
    y2 = receiverRects.top
    className += ' expanded'
    let scrollTop = routesEl.parentElement.scrollTop
    x1 = routesRects.width / 10
    let senderButtonContainer = senderEl.querySelector('.button-container')
    let senderHeight = senderButtonContainer.getBoundingClientRect().height / 2 + 12
    top = routesRects.top + scrollTop + senderHeight
    height = Math.abs(top - receiverRects.top)
    if (y2 < top) {
      y1 = height
      y2 = 0
      top -= height
    } else {
      y1 = 0
      y2 = height
    }
  }

  return <svg
    style={{
      top: top - routesRects.top
    }}
    className={className}
    viewBox={`0 0 ${width} ${height + 4}`}
    preserveAspectRatio='none'
    height={height + 4}
    xmlns='http://www.w3.org/2000/svg'>
    <LineComponent x1={x1} y1={y1} y2={y2} width={width} height={height} />
  </svg>
}

Route.propTypes = {
  data: PropTypes.object.isRequired,
  expanded: PropTypes.bool.isRequired
}

export default Route
