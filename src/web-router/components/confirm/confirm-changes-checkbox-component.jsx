import React, { PropTypes } from 'react'
import { No } from '../../../gel-react/iconography'

let Empty = () => {
  return <svg
    className='gel-icon gel-icon-empty'
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32' />
}

let Checkbox = ({onClick, state}) => {
  state = state || ''
  onClick = onClick || function () {}
  return <div className={`confirm-checkbox ${state}`}
    onClick={function () { onClick() }}>
    <No />
    <Empty />
  </div>
}

Checkbox.propTypes = {
  onClick: PropTypes.func,
  state: PropTypes.string
}

export default Checkbox
