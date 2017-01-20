import checkAll from './check-all'
import checkNone from './check-none'
import checkOne from './check-one'
import insertRoutes from '../insert/insert-routes'

export default (data, type, id) => {
  if (id === 'all') checkAll(data[type])
  else if (id === 'none') checkNone(data[type])
  else checkOne(data[type], id)
  insertRoutes(data)
}
