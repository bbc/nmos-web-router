import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Checkbox from './confirm-changes-checkbox-component'

let ConfirmChangesCheckbox = (routingMode) => {
  function onCheckboxClick () {
    console.log(routingMode)
  }
  return <Layout layouts='right'>
    <LayoutItem className='confirm-changes'>
      <span className='confirm-label'>Confirm changes mode</span>
      <Checkbox
        onClick={onCheckboxClick}
        state='unchecked'
        />
    </LayoutItem>
  </Layout>
}

ConfirmChangesCheckbox.PropTypes = {
  routingMode: PropTypes.object.isRequired
}

export default ConfirmChangesCheckbox
