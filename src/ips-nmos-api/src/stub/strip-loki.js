module.exports = function (obj) {
  obj = Object.assign({}, obj)
  delete obj.version
  delete obj.meta
  delete obj['$loki']
  return obj
}
