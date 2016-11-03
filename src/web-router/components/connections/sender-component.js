import React, { PropTypes } from 'react'
import Icon from '../icon-component'

let Sender = ({sender, actions}) => {
  return <div
    className={`routable ${sender.state}`}
    onClick={
      function (evt) {
        evt.stopPropagation()
        actions.toggleSender(sender)
      }}>
    <div className='short'>
      <div className='button'>
        <Icon format={sender.format} />
        <span className='label'>{sender.label}</span>
      </div>
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
