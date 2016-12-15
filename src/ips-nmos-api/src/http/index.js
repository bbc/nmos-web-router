var Get = require('./get')
var Subscriptions = require('./subscriptions')
var Route = require('./route')
var Subscription = require('./subscription')

module.exports = function (options) {
  let getters = {
    flows: Get(options.get, 'flows'),
    sources: Get(options.get, 'sources'),
    nodes: Get(options.get, 'nodes'),
    devices: Get(options.get, 'devices'),
    senders: Get(options.get, 'senders'),
    receivers: Get(options.get, 'receivers')
  }

  let routers = {
    route: Route(getters),
    unroute (id) { return Route(getters)(id, {}) }
  }

  let subscriptions = Subscriptions(options.get)
  let subscribers = {
    subscriptions: subscriptions,
    subscription: {
      receivers: Subscription(getters, options.WebSocket, subscriptions, 'receivers'),
      flows: Subscription(getters, options.WebSocket, subscriptions, 'flows'),
      sources: Subscription(getters, options.WebSocket, subscriptions, 'sources'),
      nodes: Subscription(getters, options.WebSocket, subscriptions, 'nodes'),
      devices: Subscription(getters, options.WebSocket, subscriptions, 'devices'),
      senders: Subscription(getters, options.WebSocket, subscriptions, 'senders')
    }
  }
  return Object.assign({}, getters, routers, subscribers)
}
