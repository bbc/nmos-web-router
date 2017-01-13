import clone from 'clone'

export default ({senders, flows, receivers, routes}) => {
  senders = senders || []
  flows = flows || []
  receivers = receivers || []
  routes = routes || []

  senders = clone(senders)
  flows = clone(flows)
  receivers = clone(receivers)
  routes = clone(routes)

  return {senders, flows, receivers, routes}
}
