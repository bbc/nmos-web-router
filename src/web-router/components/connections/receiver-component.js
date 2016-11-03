import React, { PropTypes } from 'react'
import Icon from './icon-component'
import { No } from '../../../gel-react/iconography'
import Button from '../../../components/button-component'

let Receiver = ({senders, receiver, actions}) => {
  return <div
    className={`routable ${receiver.state}`}
    onClick={
      function (evt) { evt.stopPropagation() }
    }>
    <Button
      onClick={function () {
        if (receiver.state.includes('selectable')) actions.route(receiver, senders)
      }}
      icon={<Icon format={receiver.format} />}
      label={receiver.label}
      fill
      />
    <div className={`node-container node-container-${receiver.node.state}`}>
      <div
        onClick={function () {
          actions.unroute(receiver)
        }}
        className={`node ${receiver.node.state}`}>
        <No />
      </div>
    </div>
  </div>
}

Receiver.propTypes = {
  senders: PropTypes.array.isRequired,
  receiver: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Receiver
