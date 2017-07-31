import checkAll from './check-all'
import checkNone from './check-none'
import checkOne from './check-one'
import insertRoutes from '../insert/insert-routes'
import checkSaved from './check-saved'

export default (data, type, id) => {
  if (id === 'all') checkAll(data[type])
  else if (id === 'none') checkNone(data[type])
  else if (id === 'saved') checkSaved(data[type], type)
  else checkOne(data[type], id)
  insertRoutes(data)
}
