export default (data, connections) => {
  connections.receivers = connections.receivers.map(routable => {
    let matchingRoutable = data.receivers.filter(r => {
      return routable.id === r.id
    })[0]
    routable.node.state = 'unrouted'
    if (matchingRoutable === undefined) routable.state = 'disabled'
    else if (matchingRoutable.subscription.sender) routable.node.state = 'routed'
    return routable
  })

  return connections
}
