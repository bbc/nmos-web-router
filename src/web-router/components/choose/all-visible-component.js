import React, { PropTypes } from 'react'
import { LongPrimer } from '../../../gel-react/typography'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Checkbox from '../../../components/checkbox-component'

let Visible = ({type, actions, expandedSender, state}) => {
  return <LayoutItem gels='1/1' className='all-visible-label'>
    <LongPrimer>All Visible</LongPrimer>
    <Checkbox
      onClick={function () {
        if (!expandedSender.state.includes('contracted')) actions.toggleSender(expandedSender)
        actions.allVisible(type)
      }}
      state={state} />
  </LayoutItem>
}

Visible.propTypes = {
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expandedSender: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
}

let AllVisible = ({actions, expandedSender, state}) => {
  return <Layout>
    <LayoutItem className='all-visible all-visible-left' gels='1/2'>
      <Visible
        state={state.senders}
        type='senders'
        expandedSender={expandedSender}
        actions={actions} />
    </LayoutItem>
    <LayoutItem className='all-visible all-visible-right' gels='1/2'>
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
