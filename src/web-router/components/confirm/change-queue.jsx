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

let ChangeQueue = ({actions, changes}) => {
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
          state={change.state}
          oldSender={change.oldSender} />
      })
      }
  </div>
}

ChangeQueue.propTypes = {
  actions: PropTypes.object.isRequired,
  changes: PropTypes.array.isRequired
}

export default ChangeQueue
