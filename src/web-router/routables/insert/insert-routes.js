import clone from 'clone'
import sortRoutes from '../common/sort-routes'

export default (data) => {
  function get (routables, id) {
    return routables.filter(routable => {
      return routable.id === id
    })[0]
  }

  data.routes = data.receivers
    .filter(receiver => {
      return receiver.subscription.sender_id !== null
    })
    .filter(receiver => {
      // this is not a good thing... but needed for sorting
      return get(data.senders, receiver.subscription.sender_id) !== undefined
    })
    .map(receiver => {
      let sender = get(data.senders, receiver.subscription.sender_id)
      return {
        state: 'routed',
        receiver: clone(receiver),
        sender: clone(sender)
      }
    })

  data.routes.sort(sortRoutes)
}
