import React, { PropTypes } from 'react'
import { Layout, LayoutItem } from '../../../gel-react/grid'
import Routable from '../../routables/routable-component'

class Visible extends React.Component {
  constructor (props) {
    super(props)

    this.onCheckbox = this.onCheckbox.bind(this)
  }

  onCheckbox () {
    const {type, actions, expanded} = this.props

    if (!expanded.state.includes('contracted')) {
      actions.toggleSender(expanded)
    }
    actions.allVisible(type)
  }

  render () {
    const {type, state} = this.props

    return <Routable
      baseState={`blank ${state}`}
      routable={{
        label: 'All Visible',
        format: 'blank'
      }}
      checkbox
      onCheckbox={this.onCheckbox}
      columnTitle={type}
    />
  }
}

Visible.propTypes = {
  type: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
  expanded: PropTypes.object.isRequired,
  state: PropTypes.string.isRequired
}

let AllVisible = ({actions, expanded, state}) => {
  return <Layout className='header' gels='1/1'>
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
