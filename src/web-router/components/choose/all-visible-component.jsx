import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'

import Checkbox from '../../routables/checkbox-component'

let AllVisible = ({type, actions, expanded, state}) => {
  function onCheckboxClick () {
    if (!expanded.state.includes('contracted')) actions.toggleSender(expanded)
    actions.allVisible(type)
  }
  return <Layout>
    <LayoutItem className='label' gels='3/4'>
      <span>All Visible</span>
    </LayoutItem>
    <LayoutItem className='checkbox-container' gels='1/4'>
      <Checkbox onClick={onCheckboxClick} state={state[type]} />
    </LayoutItem>
  </Layout>
}

AllVisible.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired
}

export default AllVisible
