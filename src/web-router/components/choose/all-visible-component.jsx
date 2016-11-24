import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Routable from '../shared/routable-component'

let Visible = ({type, actions, expandedSender, state}) => {
  return <Routable
    baseState={`static blank ${state}`}
    routable={{
      label: 'All Visible',
      format: 'blank'
    }}
    checkbox
    onCheckbox={function () {
      if (!expandedSender.state.includes('contracted')) actions.toggleSender(expandedSender)
      actions.allVisible(type)
    }}
    />
}

Visible.propTypes = {
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expandedSender: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
}

let AllVisible = ({actions, expandedSender, state}) => {
  return <Layout>
    <LayoutItem className='all-visible-left' gels='1/2'>
      <Visible
        state={state.senders}
        type='senders'
        expandedSender={expandedSender}
        actions={actions} />
    </LayoutItem>
    <LayoutItem className='all-visible-right' gels='1/2'>
      <Visible
        state={state.receivers}
        type='receivers'
        expandedSender={expandedSender}
        actions={actions} />
    </LayoutItem>
  </Layout>
}

AllVisible.propTypes = {
  state: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  expandedSender: PropTypes.object.isRequired
}

export default AllVisible
