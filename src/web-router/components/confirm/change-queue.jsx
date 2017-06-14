/*
"ChangeQueue" returns a div containing a graphical representation
  of each change currently staged
"Change" returns a graphical representation of a single change which
  consists of the relevant sender and receiver, joined by a yellow or red
  line (route/unroute) and also a red delete button allowing that change
  to be removed
*/

import React, { PropTypes } from 'react'
import Change from './change-component'

let ChangeQueue = ({senders, receivers, actions, changes}) => {
  return <div className='changes-scroll'>{
      changes.map((change, index) => {
        return <Change
          id={change.receiver.id + 'change'}
          key={index}
          sender={change.sender}
          receiver={change.receiver}
          actions={actions}
          type={change.type}
          index={index}
          state={change.state} />
      })
      }
  </div>
}

ChangeQueue.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  changes: PropTypes.array.isRequired
}

export default ChangeQueue
