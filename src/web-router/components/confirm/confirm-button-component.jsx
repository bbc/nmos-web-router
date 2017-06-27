/*
Changes are deployed and then time is left for them to fade from view
  before all 'deployed' changes are deleted

***** There may need to be some work done here to check that changes ******
      which go wrong are not deleted but remain in the 'Confirm' view
*/

import React, { PropTypes } from 'react'
import { Pica } from '../../../gel-react/typography'
import { LayoutItem } from '../../../gel-react/grid'

let ConfirmButton = ({changes, actions, senders, state}) => {
  let confirmClick = () => {
    if (state === 'enabled') {
      changes.forEach((change) => {
        if (change.type === 'route' && change.state === 'staged') {
          actions.deployRoute(senders, change.sender.id, change.receiver, change.subscriptionID)
        } else if (change.type === 'unroute' && change.state === 'staged') {
          actions.deployUnroute(change.sender, change.receiver)
        }
      })
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
