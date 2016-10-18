import stripLoki from './strip-loki'

export default (collection, callback) => {
  collection.on('delete', (data) => {
    let pre = stripLoki(data)
    let post = {}
    callback({ pre, post })
  })
}
