import clone from 'clone'
import sortRoutes from '../common/sort-routes'
import StageChange from '../stage-change'

export default (data) => {
  function get (routables, id) {
    return routables.filter(routable => {
      return routable.id === id
    })[0]
  }

  let receivers = data.receivers
    .filter(receiver => {
      return receiver.subscription.sender_id !== null && !receiver.state.includes('removed')
    })

  let senders = data.senders
    .filter(sender => {
      return !sender.state.includes('removed')
    })

  data.routes = receivers
    .map(receiver => {
      let sender = get(senders, receiver.subscription.sender_id)
      return {
        state: 'routed',
        receiver: clone(receiver),
        sender: clone(sender)
      }
    })

  if (data.changes) {
    let stageChange = StageChange(data)
    data.changes.forEach(change => {
      stageChange(change.sender.id, change.receiver.id, change.type, false)
    })
  }

  data.routes.sort(sortRoutes)
}
