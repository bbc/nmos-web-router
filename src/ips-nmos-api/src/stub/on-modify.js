let stripLoki = require('./strip-loki')

module.exports = (collection, callback) => {
  let pre = {}

  let preCallback = (data) => {
    pre = stripLoki(data)
  }
  collection.on('pre', preCallback)

  let updateCallback = (data) => {
    let post = stripLoki(data)
    callback({ pre, post })
    pre = {}
  }
  collection.on('update', updateCallback)

  return {preCallback, updateCallback}
}
