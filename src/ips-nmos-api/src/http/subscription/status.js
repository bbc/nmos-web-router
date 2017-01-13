module.exports = () => {
  let status = 'closed'
  return {
    value () {
      return status
    },
    connecting () {
      status = 'connecting'
    },
    open () {
      status = 'open'
    },
    close () {
      status = 'closed'
    },
    error () {
      status = 'error'
    }
  }
}
