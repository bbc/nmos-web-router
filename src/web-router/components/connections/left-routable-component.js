import React, { PropTypes } from 'react'
import Icon from './icon-component'
import Button from '../../../components/button-component'
import { LayoutItem } from '../../../gel-react/grid'

let LeftRoutable = ({routable, actions}) => {
  return <LayoutItem gels='1/1' className={`routable ${routable.state}`}>
    <Button
      onClick={function () {
        actions.toggleLeft(routable)
      }}
      fill
      icon={<Icon format={routable.format} />}
      label={routable.label}
      />
    <div className={`node ${routable.node.state}`} />
  </LayoutItem>
}

LeftRoutable.propTypes = {
  routable: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default LeftRoutable
