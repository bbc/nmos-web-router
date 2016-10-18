import React, { PropTypes } from 'react'
import Icon from '../routable/icon-component'
import Button from '../../../components/button-component'
import { LayoutItem } from '../../../gel-react/grid'

let LeftRoutable = ({routable}) => {
  return <LayoutItem gels='1/1' className='routable'>
    <Button
      name='routable'
      icon={<Icon format={routable.format} />}
      className={`${routable.state} left`}
      fill
      label={routable.label}
      afterLabel={<div className={`node ${routable.node.status}`} />}
      />
  </LayoutItem>
}

LeftRoutable.propTypes = {
  routable: PropTypes.object.isRequired
}

export default LeftRoutable
