import React, { PropTypes } from 'react'

import Main from './components'

let MainContainer = ({children, actions}) => {
  return <Main children={children} actions={actions} />
}

MainContainer.propTypes = {
  children: PropTypes.object,
  actions: PropTypes.object.isRequired
}

export default MainContainer
