/*
Update functions add or remove senders/receivers/flows according to incoming websocket
  grains. The adding is done by functions in routables/insert
  To 'remove' a routable is to change its state to removed so that it appears greyed out
    in the UI. It is not actually deleted from the relevant array unless it expires
*/

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
