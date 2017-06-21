import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import { Yes } from '../../../gel-react/iconography'
import { Link } from 'react-router'
import { Pica } from '../../../gel-react/typography'

let Empty = () => {
  return <svg
    className='gel-icon gel-icon-empty'
    xmlns='http://www.w3.org/2000/svg'
    width='32'
    height='32'
    viewBox='0 0 32 32' />
}

let ChangeModeCheckbox = ({view, actions}) => {
  function onCheckboxClick () {
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
  let location = view.location
  if (location) {
    location = location.replace('/web-router/', '')
    location = location.replace(mode.now, '')
  } else {
    location = '/choose'
  }
  let searchTerm = view.choose.term || ''

  return <Layout
    className={`change-mode-container ${mode.now}`}
    layouts='right'>
    <LayoutItem gels='4/8' className='label-container'>
      <Pica className='change-mode-label'>Confirm changes mode:</Pica>
    </LayoutItem>
    <LayoutItem gels='1/8'>
      <Link
        to={`/web-router/${mode.next}${location}?search=${searchTerm}`}
        className={`checkbox`}
        onClick={function () { onCheckboxClick() }}>
        <Yes />
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
