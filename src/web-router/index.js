import container from './container'
import reducers from './reducers'
import dispatchers from './dispatchers'
import initialState from './initial-state.json'

export default {
  name: 'web-router',
  initialState,
  reducers,
  reducersAll: reducers.all,
  dispatchers,
  container
}
