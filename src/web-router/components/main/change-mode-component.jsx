import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { No } from '../../../gel-react/iconography'
import { Link } from 'react-router'
import { LongPrimer } from '../../../gel-react/typography'
import Empty from '../shared/empty'

let ChangeModeCheckbox = ({view, actions}) => {
  function onCheckboxClick () {
    if (view.changes) {
      view.changes.forEach(change => {
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
  mode.now = view.routingMode
  mode.next = (mode.now === 'automatic') ? 'manual' : 'automatic'

  /* Extract the user's current location (/choose /route or /confirm) by removing
  the other parts of view.location and use this to ensure the user stays in the same
  location when they change mode */
  /* Default to /choose if view.location is null */
  let location = '/choose'
  if (view.location && !(view.location.includes('/confirm') && mode.now === 'manual')) {
    location = view.location
    location = location.replace('/web-router/', '')
    location = location.replace(mode.now, '')
  }
  let searchTerm = view.choose.term || ''

  return <Layout
    className={`change-mode-container ${mode.now}`}
    layouts='right'>
    <LayoutItem gels='5/12' className='label-container'>
      <LongPrimer className='change-mode-label'>Confirm changes mode:</LongPrimer>
    </LayoutItem>
    <LayoutItem className='checkbox-container'>
      <Link
        to={`/web-router/${mode.next}${location}?search=${searchTerm}`}
        className={`checkbox`}
        onClick={function () { onCheckboxClick() }}>
        <No />
        <Empty />
      </Link>
    </LayoutItem>
  </Layout>
}

ChangeModeCheckbox.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ChangeModeCheckbox
