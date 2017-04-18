var Get = require('./get')
var Subscriptions = require('./subscriptions')
var Route = require('./route')
var Subscription = require('./subscription')

module.exports = function (options) {
  let getters = {
    flows: Get(options.url, options.apiVersion, 'flows'),
    sources: Get(options.url, options.apiVersion, 'sources'),
    nodes: Get(options.url, options.apiVersion, 'nodes'),
    devices: Get(options.url, options.apiVersion, 'devices'),
    senders: Get(options.url, options.apiVersion, 'senders'),
    receivers: Get(options.url, options.apiVersion, 'receivers')
  }

  let routers = {
    route: Route(getters),
    unroute (id) { return Route(getters)(id, {}) }
  }

  let subscriptions = Subscriptions(options.url, options.apiVersion)
  let subscribers = {
    subscriptions: subscriptions,
    subscription: {
      receivers: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'receivers'),
      flows: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'flows'),
      sources: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'sources'),
      nodes: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'nodes'),
      devices: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'devices'),
      senders: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'senders')
    }
  }
  return Object.assign({}, getters, routers, subscribers)
}
