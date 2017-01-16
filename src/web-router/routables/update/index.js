import cloneRoutables from '../common/clone-routables'

import Flows from './flows'
import Receivers from './receivers'
import Senders from './senders'

export default (data) => {
  data = cloneRoutables(data)

  return {
    flows: Flows(data),
    receivers: Receivers(data),
    senders: Senders(data)
  }
}
