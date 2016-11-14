import React, { PropTypes } from 'react'

import Main from './components'

let MainContainer = ({children}) => {
  return <Main children={children} />
}

MainContainer.propTypes = {
  children: PropTypes.object
}

export default MainContainer
