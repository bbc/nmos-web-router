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
      choose: {
        term: '',
        allVisibleState: {
          senders: 'all',
          receivers: 'all'
        }
      },
      senders: [],
      receivers: [],
      expandedSender: {
        state: 'contracted',
        node: {}
      }
    },
    initialised: false,
    location: '/'
  },
  reducers,
  reducersAll: reducers.all,
  dispatchers,
  container
}
