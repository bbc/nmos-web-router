var Get = require('./get')
var Subscriptions = require('./subscriptions')
var Route = require('./route')
var Subscription = require('./subscription')

module.exports = function (options) {
  let subscriptions = Subscriptions(options.get)
  return {
    subscriptions: subscriptions,
    flows: Get(options.get, 'flows'),
    sources: Get(options.get, 'sources'),
    nodes: Get(options.get, 'nodes'),
    devices: Get(options.get, 'devices'),
    senders: Get(options.get, 'senders'),
    receivers: Get(options.get, 'receivers'),
    route: Route(options.put),
    unroute (id) { return Route(options.put)(id, {}) },
    subscription: {
      receivers: Subscription(options.WebSocket, subscriptions, 'receivers'),
      flows: Subscription(options.WebSocket, subscriptions, 'flows'),
      sources: Subscription(options.WebSocket, subscriptions, 'sources'),
      nodes: Subscription(options.WebSocket, subscriptions, 'nodes'),
      devices: Subscription(options.WebSocket, subscriptions, 'devices'),
      senders: Subscription(options.WebSocket, subscriptions, 'senders')
    }
  }
}
