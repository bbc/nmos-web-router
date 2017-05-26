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

let ConfirmChangesCheckbox = ({view, actions}) => {
  function onCheckboxClick () {
    actions.changeMode()
  }

  let mode = {now: '', next: ''}
  if (view.routingMode === 'automatic') {
    mode.now = 'automatic'
    mode.next = 'manual'
  } else {
    mode.now = 'manual'
    mode.next = 'automatic'
  }

  let location = view.location
  if (location) {
    location = location.replace('/web-router/', '')
    location = location.replace(mode.now, '')
  } else {
    location = '/choose'
  }
  let searchTerm = view.choose.term || ''

  return <div
    className={`confirm-changes ${mode.now}`}>
    <Layout layouts='right'>
      <LayoutItem gels='3/8'>
        <Pica className='confirm-label'>Confirm changes mode</Pica>
      </LayoutItem>
      <LayoutItem gels='1/8'>
        <Link
          to={`/web-router/${mode.next}${location}?search=${searchTerm}`}
          className={`confirm-checkbox`}
          onClick={function () { onCheckboxClick() }}>
          <Yes />
          <Empty />
        </Link>
      </LayoutItem>
    </Layout>
  </div>
}

ConfirmChangesCheckbox.propTypes = {
  view: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

export default ConfirmChangesCheckbox
