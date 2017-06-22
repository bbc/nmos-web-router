import React, { PropTypes } from 'react'
import { Pica } from '../../../gel-react/typography'
import { LayoutItem } from '../../../gel-react/grid'

let ConfirmButton = ({changes, actions, senders, state}) => {
  let confirmClick = () => {
    if (state === 'enabled') {
      changes.forEach((change) => {
        if (change.type === 'route' && change.state === 'staged') {
          actions.deployRoute(senders, change.sender.id, change.receiver)
        } else if (change.type === 'unroute' && change.state === 'staged') {
          actions.deployUnroute(change.sender, change.receiver)
        }
      })
      // Remove any changes that have been set to 'deployed'
      // The timeout allows time for visual fade transition (0.25s)
      // Should be every change that gets removed but if something goes
      // wrong with deployment then the change's state shouldn't be 'deployed'
      // *** Not tested very thoroughly ***
      setTimeout(function () { actions.clearChanges('deployed') }, 500)
    }
  }

  return <LayoutItem className={`button confirm ${state}`}
    onClick={function () { confirmClick() }}>
    <Pica className='button-label'>Confirm</Pica>
  </LayoutItem>
}

ConfirmButton.propTypes = {
  changes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  state: PropTypes.string.isRequired
}

export default ConfirmButton
