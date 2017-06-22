import React, { PropTypes } from 'react'
import { Pica } from '../../../gel-react/typography'
import { LayoutItem } from '../../../gel-react/grid'

let ClearButton = ({changes, actions, state}) => {
  let clearClick = () => {
    changes.forEach(change => {
      actions.unstageChange(change.sender.id, change.receiver.id, change.type)
    })
    setTimeout(function () { actions.clearChanges('unstaged') }, 500)
  }

  return <LayoutItem className={`button clear ${state}`}
    onClick={function () { clearClick() }}>
    <Pica className='button-label'>Clear</Pica>
  </LayoutItem>
}

ClearButton.propTypes = {
  changes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
}

export default ClearButton
