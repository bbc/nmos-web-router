import React, { PropTypes } from 'react'
import { No } from '../../gel-react/iconography'

let Minus = () => {
  return <svg
    className='gel-icon gel-icon-minus'
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32'>
    <line x1='0' y1='16'
      x2='32' y2='16'
      strokeWidth='4'
      stroke='black' />
  </svg>
}

let Empty = () => {
  return <svg
    className='gel-icon gel-icon-empty'
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32' />
}

let Checkbox = ({onClick, state}) => {
  onClick = onClick || function () {}
  return <div className={`checkbox ${state}`}
    onClick={function () { onClick(state) }}>
    <No />
    <Minus />
    <Empty />
  </div>
}

Checkbox.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string
}

export default Checkbox
