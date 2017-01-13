const noop = () => {}

module.exports = () => {
  let updates = []
  let opens = []
  let closes = []
  let errors = []

  return {
    update (data) {
      updates.forEach(callback => {
        callback(data)
      })
    },
    open () {
      opens.forEach(callback => {
        callback()
      })
    },
    close () {
      closes.forEach(callback => {
        callback()
      })
    },
    error (error) {
      errors.forEach(callback => {
        callback(error)
      })
    },
    push ({update, open, close, error}) {
      updates.push(update || noop)
      opens.push(open || noop)
      closes.push(close || noop)
      errors.push(error || noop)
      return updates.length - 1
    },
    pop (token) {
      if (updates[token]) {
        updates[token] = noop
        opens[token] = noop
        closes[token] = noop
        errors[token] = noop
      }
    }
  }
}
