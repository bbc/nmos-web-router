import React, { PropTypes } from 'react'
import { LayoutItem } from '../../../gel-react/grid'
import { Yes } from '../../../gel-react/iconography'
import {Link} from 'react-router'

let Empty = () => {
  return <svg
    className='gel-icon gel-icon-empty'
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32' />
}

let ConfirmChangesCheckbox = ({mode, location, searchTerm, actions}) => {
  function onCheckboxClick () {
    actions.changeMode()
  }
  return <div
    className={`confirm-changes ${mode.now}`}>
    <LayoutItem>
      <span className='confirm-label'>Confirm changes mode</span>
      <Link
        to={`/web-router/${mode.next}${location}?search=${searchTerm}`}
        className={`confirm-checkbox`}
        onClick={function () { onCheckboxClick() }}>
        <Yes />
        <Empty />
      </Link>
    </LayoutItem>
  </div>
}

ConfirmChangesCheckbox.propTypes = {
  mode: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default ConfirmChangesCheckbox
