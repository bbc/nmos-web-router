import React, { PropTypes } from 'react'
import Icon from './icon-component'
import Button from '../../../components/button-component'

let Sender = ({sender, actions}) => {
  return <div className={`routable ${sender.state}`}>
    <div className='short'>
      <Button
        onClick={function () {
          actions.toggleSender(sender)
        }}
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
