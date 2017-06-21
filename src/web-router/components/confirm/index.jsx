/*
Confirm components are used to build the optional 'Confirm' view in which
  routing changes are displayed (staged changes) and the user then has the option
  to deploy all of the changes at once
  - Jason L 06/2017
*/

import './confirm.css'

import React, { PropTypes } from 'react'
import { Layout } from '../../../gel-react/grid'
import Header from './header-component'
import ChangeQueue from './change-queue'
import ClearConfirmButtons from './clear-confirm-buttons-component'

let Confirm = ({changes, actions}) => {
  return <Layout className='confirm box box-hidden'>
    <Header />
    <ChangeQueue
      actions={actions}
      changes={changes} />
    <ClearConfirmButtons
      changes={changes}
      actions={actions} />
  </Layout>
}

Confirm.propTypes = {
  changes: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default Confirm
