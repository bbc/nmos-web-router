/* import React, { PropTypes } from 'react'
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

export default AllVisible */

import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

let Visible = ({type, actions, expanded, state}) => {
  return <Routable
    baseState={`blank ${state}`}
    routable={{
      label: 'All Visible',
      format: 'blank'
    }}
    checkbox
    onCheckbox={function () {
      if (!expanded.state.includes('contracted')) actions.toggleSender(expanded)
      actions.allVisible(type)
    }}
    columnTitle={type}
    />
}

Visible.propTypes = {
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
}

let AllVisible = ({actions, expanded, state}) => {
  return <Layout>
    <LayoutItem className='all-visible-left' gels='1/2'>
      <Visible
        state={state.senders}
        type='senders'
        expanded={expanded}
        actions={actions} />
    </LayoutItem>
    <LayoutItem className='all-visible-right' gels='1/2'>
      <Visible
        state={state.receivers}
        type='receivers'
        expanded={expanded}
        actions={actions} />
    </LayoutItem>
  </Layout>
}

AllVisible.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired
}

export default AllVisible
