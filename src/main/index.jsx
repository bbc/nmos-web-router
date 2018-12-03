import MainContainer from './container'
import reducers from './reducers'
import dispatchers from './dispatchers'

export default {
  name: 'main',
  reducers,
  dispatchers,
  container: MainContainer
}
