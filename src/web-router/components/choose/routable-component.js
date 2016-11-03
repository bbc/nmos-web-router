import React, { PropTypes } from 'react'

let Routable = ({routable}) => {
  return <div>{routable.label}</div>
}

Routable.propTypes = {
  routable: PropTypes.object.isRequired
}

export default Routable
