var Get = require('./get')
var Subscriptions = require('./subscriptions')
var Route = require('./route')
var Subscription = require('./subscription')

module.exports = function (options) {
  let getters = {
    flows: Get(options.url, options.apiVersion, 'flows', options.downgrade, options.downgradeVersion),
    sources: Get(options.url, options.apiVersion, 'sources', options.downgrade, options.downgradeVersion),
    nodes: Get(options.url, options.apiVersion, 'nodes', options.downgrade, options.downgradeVersion),
    devices: Get(options.url, options.apiVersion, 'devices', options.downgrade, options.downgradeVersion),
    senders: Get(options.url, options.apiVersion, 'senders', options.downgrade, options.downgradeVersion),
    receivers: Get(options.url, options.apiVersion, 'receivers', options.downgrade, options.downgradeVersion)
  }

  let routers = {
    route: Route(getters),
    unroute (id) { return Route(getters)(id, {}) }
  }

  let subscriptions = Subscriptions(options.url, options.apiVersion)
  let subscribers = {
    subscriptions: subscriptions,
    subscription: {
      receivers: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'receivers', options.downgrade, options.downgradeVersion),
      flows: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'flows', options.downgrade, options.downgradeVersion),
      sources: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'sources', options.downgrade, options.downgradeVersion),
      nodes: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'nodes', options.downgrade, options.downgradeVersion),
      devices: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'devices', options.downgrade, options.downgradeVersion),
      senders: Subscription(options.url, options.apiVersion, getters, options.WebSocket, 'senders', options.downgrade, options.downgradeVersion)
    }
  }
  return Object.assign({}, getters, routers, subscribers)
}
