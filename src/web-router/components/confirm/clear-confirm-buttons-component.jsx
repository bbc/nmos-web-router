import React, { PropTypes } from 'react'
import { Pica } from '../../../gel-react/typography'
import { Layout, LayoutItem } from '../../../gel-react/grid'

let ClearConfirm = ({changes, actions}) => {
  let buttonState = 'disabled'
  if (changes.length !== 0) {
    buttonState = 'enabled'
  }

  let clearClick = () => {
    actions.clearChanges()
  }

  let confirmClick = () => {
    changes.forEach(change => {
      if (change.type === 'route') {
        actions.deployRoute(change.sender, change.receiver)
      } else if (change.type === 'unroute') {
        actions.unroute(change.receiver)
      }
    })
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
