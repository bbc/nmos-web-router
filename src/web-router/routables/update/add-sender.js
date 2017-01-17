import insertSenders from '../insert/insert-senders'

export default ({data, grain}) => {
  insertSenders(data, [grain.post])
}
