var get = require('./get')
var subscriptions = require('./subscriptions')
var route = require('./route')

module.exports = function (options) {
  return {
    subscriptions: subscriptions(options.get),
    flows: get(options.get, 'flows'),
    sources: get(options.get, 'sources'),
    nodes: get(options.get, 'nodes'),
    devices: get(options.get, 'devices'),
    senders: get(options.get, 'senders'),
    receivers: get(options.get, 'receivers'),
    route: route(options.put),
    unroute (id) { return route(options.put)(id, {}) },
    subscribe: {
      flows: function (callback) { },
      sources: function (callback) { },
      nodes: function (callback) { },
      devices: function (callback) { },
      senders: function (callback) { },
      receivers: function (callback) { }
    }
  }
}
