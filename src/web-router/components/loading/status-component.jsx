import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'

let Status = ({name, icon, label}) => {
  return <LayoutItem gels='1/3'>
    <div className={`button ${name} status`}>
      {icon}
      <span className='label'>{label.toUpperCase()}</span>
    </div>
  </LayoutItem>
}

Status.propTypes = {
  icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Status
