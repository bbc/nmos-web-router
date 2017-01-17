import insertReceivers from '../insert/insert-receivers'
import insertRoutes from '../insert/insert-routes'

export default ({data, grain}) => {
  insertReceivers(data, [grain.post])
  insertRoutes(data)
}
