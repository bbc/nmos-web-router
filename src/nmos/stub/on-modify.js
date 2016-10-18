import stripLoki from './strip-loki'

export default (collection, callback) => {
  let pre = {}
  collection.on('pre', (data) => {
    pre = stripLoki(data)
  })
  collection.on('update', (data) => {
    let post = stripLoki(data)
    callback({ pre, post })
    pre = {}
  })
}
