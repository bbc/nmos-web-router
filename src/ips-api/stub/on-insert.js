import stripLoki from './strip-loki'

export default (collection, callback) => {
  collection.on('insert', (data) => {
    let pre = {}
    let post = stripLoki(data)
    callback({ pre, post })
  })
}
