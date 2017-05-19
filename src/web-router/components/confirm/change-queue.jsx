import React, { PropTypes } from 'react'

import { Layout } from '../../../gel-react/grid'
import Change from './change-component'

let ChangeQueue = ({senders, receivers, actions}) => {
  return <div className='changes-scroll'>
    <Layout>
      <Change
        senders={senders}
        receivers={receivers}
        actions={actions}
        index={0}
        type={'route'} />
      <Change
        senders={senders}
        receivers={receivers}
        actions={actions}
        index={1}
        type={'unroute'} />
    </Layout>
  </div>
}

ChangeQueue.propTypes = {
  senders: PropTypes.array.isRequired,
  receivers: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default ChangeQueue
