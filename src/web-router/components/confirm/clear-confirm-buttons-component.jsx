/*
"ClearConfirm" returns a pair of buttons for the bottom of the 'Confirm' view
These buttons either delete all staged changes (clear) or deploy all
  staged changes (confirm)
*/

import React, { PropTypes } from 'react'
import { Pica } from '../../../gel-react/typography'
import { Layout, LayoutItem } from '../../../gel-react/grid'

let ClearConfirm = ({changes, actions}) => {
  let buttonState = 'disabled'
  if (changes.length !== 0) {
    buttonState = 'enabled'
  }

  let clearClick = () => {
    for (var i = changes.length - 1; i >= 0; i--) {
      actions.removeChange(changes[i].receiver.id, changes[i].sender.id, changes[i].type, false)
    }
  }

  let confirmClick = () => {
    changes.forEach((change) => {
      if (change.type === 'route') {
        actions.deployRoute(change.sender, change.receiver)
      } else if (change.type === 'unroute') {
        actions.deployUnroute(change.sender, change.receiver)
      }
    })

    // Remove any changes that have been set to 'deployed'
    // The timeout allows time for visual fade transition (0.25s)
    // Should be every change that gets removed but if something goes
    // wrong with deployment then the change's state shouldn't be 'deployed'
    // *** Not tested very thoroughly ***
    setTimeout(deleteDeployedChanges, 500)
  }

  let deleteDeployedChanges = () => {
    for (var i = changes.length - 1; i >= 0; i--) {
      if (changes[i].state === 'deployed') {
        actions.removeChange(changes[i].receiver.id, changes[i].sender.id, changes[i].type, true)
      }
    }
  }
  return <Layout gels='1/1' layouts='right' className='clear-confirm-container'>
    <LayoutItem className={`button clear ${buttonState}`}
      onClick={function () { clearClick() }}>
      <Pica className='button-label'>Clear</Pica>
    </LayoutItem>
    <LayoutItem className={`button confirm ${buttonState}`}
      onClick={function () { confirmClick() }}>
      <Pica className='button-label'>Confirm</Pica>
    </LayoutItem>
  </Layout>
}

ClearConfirm.propTypes = {
  changes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ClearConfirm
