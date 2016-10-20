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
        routables: {
          senders: [],
          receivers: []
        }
      }
    },
    initialised: false
  },
  reducers,
  reducersAll: reducers.all,
  dispatchers,
  container
}
