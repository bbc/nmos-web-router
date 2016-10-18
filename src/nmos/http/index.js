import get from './get'
import subscriptions from './subscriptions'
import route from './route'

export default function (options) {
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
      flows (callback) { },
      sources (callback) { },
      nodes (callback) { },
      devices (callback) { },
      senders (callback) { },
      receivers (callback) { }
    }
  }
}
