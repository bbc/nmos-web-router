import container from './container'
import reducers from './reducers'
import dispatchers from './dispatchers'

export default {
  name: 'web-router',
  initialState: {
    sides: {
      sender: 'left',
      senders: 'left',
      left: {
        plural: 'senders',
        singular: 'sender',
        opposite: {
          name: 'right',
          plural: 'receivers',
          singular: 'receiver'
        }
      },
      receiver: 'right',
      receivers: 'right',
      right: {
        plural: 'receivers',
        singular: 'receiver',
        opposite: {
          name: 'left',
          plural: 'senders',
          singular: 'sender'
        }
      }
    },
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
      page: 'connections-confirmation',
      layout: '1/2',
      launchPage: 'connections-confirmation',
      connections: {
        toggleSide: '',
        isDragging: false,
        mouse: {
          x: 0,
          y: 0
        },
        leftTitle: 'Senders',
        rightTitle: 'Receivers',
        routes: []
      },
      confirmation: {
        leftTitle: 'Sender',
        rightTitle: 'Receiver'
      }
    },
    initialised: false
  },
  reducers,
  reducersAll: reducers.all,
  dispatchers,
  container
}
