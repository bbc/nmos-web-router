import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { No } from '../../../gel-react/iconography'
import { Link } from 'react-router'
import { LongPrimer } from '../../../gel-react/typography'
import Empty from '../shared/empty'

let ChangeModeCheckbox = ({changes, routingMode, location, choose, actions}) => {
  function onCheckboxClick () {
    if (changes) {
      changes.forEach(change => {
        actions.unstageChange(change)
      })
      setTimeout(function () { actions.clearChanges('unstaged') }, 250)
    }
    actions.changeMode()
  }

  /* mode.now is used to set the state of the container so that CSS makes
  the checkbox tick visible or invisible depending on the current routing mode
  mode.next is used to set the target URL if the change mode checkbox is clicked */
  let mode = {now: '', next: ''}
  mode.now = routingMode
  mode.next = (mode.now === 'automatic') ? 'manual' : 'automatic'

  /* Extract the user's current location (/choose /route or /confirm) by removing
  the other parts of view.location and use this to ensure the user stays in the same
  location when they change mode */
  /* Default to /choose if view.location is null */
  let nextLocation = '/choose'
  if (location && !(location.includes('/confirm') && mode.now === 'manual')) {
    nextLocation = location
    nextLocation = nextLocation.replace('/web-router/', '')
    nextLocation = nextLocation.replace(mode.now, '')
  }
  let searchTerm = choose.term || ''

  return <Layout
    className={`change-mode-container ${mode.now}`}
    layouts='right'>
    <LayoutItem gels='1/4' className='label-container'>
      <LongPrimer className='change-mode-label'>Confirm changes mode:</LongPrimer>
    </LayoutItem>
    <LayoutItem className='checkbox-container'>
      <Link
        to={`/web-router/${mode.next}${nextLocation}?search=${searchTerm}`}
        className={`checkbox`}
        onClick={function () { onCheckboxClick() }}>
        <No />
        <Empty />
      </Link>
    </LayoutItem>
  </Layout>
}

ChangeModeCheckbox.propTypes = {
  changes: PropTypes.array.isRequired,
  routingMode: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  choose: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ChangeModeCheckbox
