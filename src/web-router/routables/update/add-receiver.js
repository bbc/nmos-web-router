import insertReceivers from '../insert/insert-receivers'

export default ({data, grain}) => {
  insertReceivers(data, [grain.post])
}
