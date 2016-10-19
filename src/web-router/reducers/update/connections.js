export default (data, connections) => {
  connections.routables.right = connections.routables.right.map(routable => {
    let receiver = data.receivers.filter(receiver => {
      return routable.id === receiver.id
    })[0]

    if (receiver === undefined) routable.state = 'disabled'
    if (receiver.subscription.sender_id === null) routable.node.state = 'unrouted'

    return routable
  })

  return connections
}
