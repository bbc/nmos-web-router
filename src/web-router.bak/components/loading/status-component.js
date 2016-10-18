import React, { PropTypes } from 'react'

import { LayoutItem } from '../../../gel-react/grid'
import Button from '../../../components/button-component'

let Status = ({name, icon, label}) => {
  return <LayoutItem gels='1/3'>
    <Button
      fill
      name={name}
      className='status'
      icon={icon}
      label={label} />
  </LayoutItem>
}

Status.propTypes = {
  icon: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Status
