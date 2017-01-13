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
      receivers: Subscription(options.url, getters, options.WebSocket, 'receivers'),
      flows: Subscription(options.url, getters, options.WebSocket, 'flows'),
      sources: Subscription(options.url, getters, options.WebSocket, 'sources'),
      nodes: Subscription(options.url, getters, options.WebSocket, 'nodes'),
      devices: Subscription(options.url, getters, options.WebSocket, 'devices'),
      senders: Subscription(options.url, getters, options.WebSocket, 'senders')
    }
  }
  return Object.assign({}, getters, routers, subscribers)
}
