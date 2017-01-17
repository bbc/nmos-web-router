import clone from 'clone'
import sortRoutes from '../common/sort-routes'

export default ({senders, receivers}) => {
  function get (routables, id) {
    return routables.filter(routable => {
      return routable.id === id
    })[0]
  }

  let routes = receivers
    .filter(receiver => {
      return receiver.subscription.sender_id !== null
    })
    .filter(receiver => {
      // this is not a good thing... but needed for sorting
      return get(senders, receiver.subscription.sender_id) !== undefined
    })
    .map(receiver => {
      let sender = get(senders, receiver.subscription.sender_id)
      return {
        state: 'routed',
        receiver: clone(receiver),
        sender: clone(sender)
      }
    })

  routes.sort(sortRoutes)
  return routes
}
