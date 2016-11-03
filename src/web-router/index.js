import container from './container'
import reducers from './reducers'
import dispatchers from './dispatchers'

export default {
  name: 'web-router',
  initialState: {
    data: {
      senders: [],
      receivers: [],
      flows: []
    },
    view: {
      scroll: true,
      loading: {
        status: 'loading',
        notLoaded: ['receivers', 'senders', 'flows'],
        loaded: [],
        errored: []
      },
      connections: {
        expandedSender: {
          state: 'contracted',
          node: {}
        }
      },
      senders: [],
      receivers: []
    },
    initialised: false,
    location: '/'
  },
  reducers,
  reducersAll: reducers.all,
  dispatchers,
  container
}
