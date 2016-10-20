export default (data, connections, sides) => {
  connections.routables.right = connections.routables.right.map(routable => {
    let matchingRoutable = data[sides.right.plural].filter(r => {
      return routable.id === r.id
    })[0]
    routable.node.state = 'unrouted'
    if (matchingRoutable === undefined) routable.state = 'disabled'
    else if (matchingRoutable.subscription.sender) routable.node.state = 'routed'
    return routable
  })

  return connections
}
