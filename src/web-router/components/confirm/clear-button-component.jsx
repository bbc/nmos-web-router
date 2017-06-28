/*
To clear all changes, each change is set to 'unstaged' so that they fade out
  and then after the fades have taken place all 'unstaged' changes are
  deleted
*/

import React, { PropTypes } from 'react'
import { Pica } from '../../../gel-react/typography'
import { LayoutItem } from '../../../gel-react/grid'

let ClearButton = ({changes, actions, state}) => {
  let clearClick = () => {
    changes.forEach(change => {
      actions.unstageChange(change)
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
