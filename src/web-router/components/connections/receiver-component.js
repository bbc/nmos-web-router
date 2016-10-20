import React, { PropTypes } from 'react'
import Icon from './icon-component'
import { No } from '../../../gel-react/iconography'
import Button from '../../../components/button-component'
import { LayoutItem } from '../../../gel-react/grid'

let Receiver = ({senders, receiver, actions}) => {
  return <LayoutItem gels='1/1' className={`routable ${receiver.state}`}>
    <div
      onClick={function () {
        actions.unroute(receiver)
      }}
      className={`node ${receiver.node.state}`}>
      <No />
    </div>
    <Button
      onClick={function () {
        if (receiver.state.includes('selectable')) actions.route(receiver, senders)
      }}
      icon={<Icon format={receiver.format} />}
      label={receiver.label}
      fill
      />
  </LayoutItem>
}

Receiver.propTypes = {
  senders: PropTypes.array.isRequired,
  receiver: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Receiver
