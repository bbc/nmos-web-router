var Get = require('./get')
var Subscriptions = require('./subscriptions')
var Route = require('./route')
var Subscription = require('./subscription')

module.exports = function (options) {
  let getters = {
    flows: Get(options.url, 'flows'),
    sources: Get(options.url, 'sources'),
    nodes: Get(options.url, 'nodes'),
    devices: Get(options.url, 'devices'),
    senders: Get(options.url, 'senders'),
    receivers: Get(options.url, 'receivers')
  }

  let routers = {
    route: Route(getters),
    unroute (id) { return Route(getters)(id, {}) }
  }

  let subscriptions = Subscriptions(options.url)
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
