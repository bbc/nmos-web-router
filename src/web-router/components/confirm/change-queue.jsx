/*
"ChangeQueue" returns a div containing a graphical representation
  of each change currently staged
"Change" returns a graphical representation of a single change which
  consists of the relevant sender and receiver, joined by a yellow or red
  line (route/unroute) and also a red delete button allowing that change
  to be removed
*/

import React, { PropTypes } from 'react'
import Change from './one-change'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class ChangeQueue extends React.Component {
  render () {
    const changes = this.props.changes.map((change, index) => {
      return <Change
        id={change.receiver.id + 'change'}
        key={change.receiver.id + change.sender.id}
        actions={this.props.actions}
        change={change} />
    })

    return <div className='changes-scroll'>
      <ReactCSSTransitionGroup
        transitionName='transition'
        transitionEnterTimeout={250}
        transitionLeaveTimeout={250}>
        {changes}
      </ReactCSSTransitionGroup>
    </div>
  }
}

ChangeQueue.propTypes = {
  actions: PropTypes.object.isRequired,
  changes: PropTypes.array.isRequired
}

export default ChangeQueue
