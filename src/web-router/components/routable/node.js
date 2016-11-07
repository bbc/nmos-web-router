import React, { PropTypes } from 'react'
import { No } from '../../../gel-react/iconography'

let Node = ({ state, onClick }) => {
  return <div className={`node-container node-container-${state}`}>
    <div
      onClick={onClick}
      className={`node ${state}`}>
      <No />
    </div>
  </div>
}

Node.propTypes = {
  state: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Node
