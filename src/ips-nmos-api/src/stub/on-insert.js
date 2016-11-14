let stripLoki = require('./strip-loki')

module.exports = (collection, callback) => {
  let insertCallback = (data) => {
    let pre = {}
    let post = stripLoki(data)
    callback({ pre, post })
  }
  collection.on('insert', insertCallback)
  return insertCallback
}
