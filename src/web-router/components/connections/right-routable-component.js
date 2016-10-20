import React, { PropTypes } from 'react'
import Icon from './icon-component'
import { No } from '../../../gel-react/iconography'
import Button from '../../../components/button-component'
import { LayoutItem } from '../../../gel-react/grid'

let RightRoutable = ({leftRoutables, routable, actions}) => {
  return <LayoutItem gels='1/1' className={`routable ${routable.state}`}>
    <div
      onClick={function () {
        actions.unroute(routable)
      }}
      className={`node ${routable.node.state}`}>
      <No />
    </div>
    <Button
      onClick={function () {
        if (routable.state.includes('selectable')) actions.route(routable, leftRoutables)
      }}
      icon={<Icon format={routable.format} />}
      label={routable.label}
      fill
      />
  </LayoutItem>
}

RightRoutable.propTypes = {
  leftRoutables: PropTypes.array.isRequired,
  routable: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default RightRoutable
