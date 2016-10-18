import Collections from './collections'
import Get from './get'
import Subscriptions from './subscriptions'
import Route from './route'
import Subscribe from './subscribe'

export default function (delay) {
  let collections = Collections
  return {
    flows: Get(collections, delay(), 'flows'),
    sources: Get(collections, delay(), 'sources'),
    nodes: Get(collections, delay(), 'nodes'),
    devices: Get(collections, delay(), 'devices'),
    senders: Get(collections, delay(), 'senders'),
    receivers: Get(collections, delay(), 'receivers'),
    subscriptions: Subscriptions(collections, delay()),
    route: Route(collections, delay()),
    unroute: Route(collections, delay(), {}, null),
    subscribe: Subscribe(collections, delay())
  }
}
