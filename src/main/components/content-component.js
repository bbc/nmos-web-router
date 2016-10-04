import React, { PropTypes } from 'react'

let Content = ({children}) => {
  return <div className='content'>
    {children}
  </div>
}

Content.propTypes = {
  children: PropTypes.object
}

export default Content
