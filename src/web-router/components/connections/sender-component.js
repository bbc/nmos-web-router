import React, { PropTypes } from 'react'
import Icon from './icon-component'
import Button from '../../../components/button-component'

let Sender = ({sender, actions}) => {
  return <div
    className={`routable ${sender.state}`}
    onClick={
      function (evt) {
        evt.stopPropagation()
        actions.toggleSender(sender)
      }}>
    <div className='short'>
      <Button
        fill
        icon={<Icon format={sender.format} />}
        label={sender.label}
        />
      <div className='node-container'>
        <div className={`node ${sender.node.state}`} />
      </div>
    </div>
  </div>
}

Sender.propTypes = {
  sender: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Sender
