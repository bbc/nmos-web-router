let stripLoki = require('./strip-loki')

module.exports = (collection, callback) => {
  let removeCallback = (data) => {
    let pre = stripLoki(data)
    let post = {}
    callback({ pre, post })
  }
  collection.on('delete', removeCallback)
  return removeCallback
}
