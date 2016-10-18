import stripLoki from './strip-loki'

export default (collections, delay) => {
  return {
    receivers (callback) {
      collections.receivers.on('insert', (data) => {
        let post = stripLoki(data)
        let pre = {}
        callback({ pre, post })
      })

      collections.receivers.on('delete', (data) => {
        let pre = stripLoki(data)
        let post = {}
        callback({ pre, post })
      })

      let pre = {}
      collections.receivers.on('pre', (data) => {
        pre = stripLoki(data)
      })
      collections.receivers.on('update', (data) => {
        let post = stripLoki(data)
        callback({ pre, post })
        pre = {}
      })

    }
  }
}
