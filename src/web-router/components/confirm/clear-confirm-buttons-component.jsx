/*
"ClearConfirm" returns a pair of buttons for the bottom of the 'Confirm' view
These buttons either delete all staged changes (clear) or deploy all
  staged changes (confirm)
*/

import React, { PropTypes } from 'react'
import { Pica } from '../../../gel-react/typography'
import { Layout, LayoutItem } from '../../../gel-react/grid'

let ClearConfirm = ({changes, actions, senders}) => {
  let buttonState = 'disabled'
  if (changes.length !== 0) {
    buttonState = 'enabled'
  }

  let clearClick = () => {
    console.log(changes)
    changes.forEach(change => {
      actions.unstageChange(change.sender.id, change.receiver.id, change.type)
    })
    setTimeout(function () { actions.clearChanges('unstaged') }, 500)
  }

  let confirmClick = () => {
    changes.forEach((change) => {
      if (change.type === 'route') {
        actions.deployRoute(senders, change.sender.id, change.receiver)
      } else if (change.type === 'unroute') {
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
  actions: PropTypes.object.isRequired,
  senders: PropTypes.array.isRequired
}

export default ClearConfirm
