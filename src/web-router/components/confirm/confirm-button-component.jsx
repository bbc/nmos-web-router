/*
Changes are deployed and then time is left for them to fade from view
  before all 'deployed' changes are deleted

***** There may need to be some work done here to check that changes ******
      which go wrong are not deleted but remain in the 'Confirm' view
*/

import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import checkForBulk from './check-for-bulk'

let ConfirmButton = ({changes, actions, senders, state}) => {
  let confirmClick = () => {
    if (state === 'enabled') {
      let deviceIDs = checkForBulk(changes)

      deviceIDs.bulk.forEach(id => {
        let bulkChanges = changes.filter(change => {
          return change.receiver.device_id === id
        })
        actions.deployBulkRoute(senders, bulkChanges, id)
      })

      deviceIDs.single.forEach((id) => {
        let change = changes.filter(change => {
          return change.receiver.device_id === id
        })[0]
        if (change.type === 'route' && change.state === 'staged') {
          actions.deployRoute(senders, change.sender.id, change.receiver, change.subscriptionID)
        } else if (change.type === 'unroute' && change.state === 'staged') {
          actions.deployUnroute(change.sender, change.receiver)
        }
      })
    }
  }

  return <LayoutItem className={`button confirm ${state}`}
    onClick={function () { confirmClick() }}>
    <span className='button-label'>CONFIRM</span>
  </LayoutItem>
}

ConfirmButton.propTypes = {
  changes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired,
  state: PropTypes.string.isRequired
}

export default ConfirmButton
