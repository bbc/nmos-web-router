import React, { PropTypes } from 'react'
import Icon from './icon-component'
import Button from '../../../components/button-component'
import { LayoutItem } from '../../../gel-react/grid'

let Sender = ({sender, actions}) => {
  return <LayoutItem gels='1/1' className={`routable ${sender.state}`}>
    <div className='short'>
      <Button
        onClick={function () {
          actions.toggleSender(sender)
        }}
        fill
        icon={<Icon format={sender.format} />}
        label={sender.label}
        />
      <div className={`node ${sender.node.state}`} />
    </div>
  </LayoutItem>
}

Sender.propTypes = {
  sender: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default Sender
