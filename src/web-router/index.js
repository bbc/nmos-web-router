import container from './container'
import reducers from './reducers'
import dispatchers from './dispatchers'

export default {
  name: 'web-router',
  initialState: {
    data: {
      senders: [],
      receivers: [],
      flows: [],
      routes: []
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
        },
        routes: []
      }
    },
    initialised: false
  },
  reducers,
  reducersAll: reducers.all,
  dispatchers,
  container
}
