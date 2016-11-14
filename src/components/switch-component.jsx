import React, { PropTypes } from 'react'

let Toggle = ({ status, onToggle, className }) => {
  status = status || Toggle.off

  return <div className={`switch-container toggle-${status}`}
    onClick={function () {
      onToggle({
        status,
        opposite: status === Toggle.off ? Toggle.on : Toggle.off
      })
    }}
    >
    <div className='switch' />
  </div>
}

Toggle.on = 'on'
Toggle.off = 'off'

Toggle.propTypes = {
  onToggle: PropTypes.func.isRequired,
  status: PropTypes.string,
  className: PropTypes.string
}

export default Toggle
