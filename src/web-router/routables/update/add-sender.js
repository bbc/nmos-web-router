import insertSenders from '../insert/insert-senders'
import insertRoutes from '../insert/insert-routes'

export default ({data, grain}) => {
  insertSenders(data, [grain.post])
  insertRoutes(data)
}
