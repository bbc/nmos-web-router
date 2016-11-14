module.exports = (collections, delay) => {
  return () => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(collections.subscriptions.all())
      }, delay())
    })
  }
}
