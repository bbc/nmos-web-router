import React, { PropTypes } from 'react'
import Change from './change-component'

let ChangeQueue = ({senders, receivers, actions, changes}) => {
  console.log(changes)
  return <div className='changes-scroll'>{
      changes.map((change, index) => {
        return <Change
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
