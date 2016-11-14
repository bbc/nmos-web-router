const random = require('./random')

module.exports = () => {
  return {
    description: random.description(),
    label: random.label(),
    id: random.id(),
    node_id: random.id(),
    type: random.url(),
    senders: random.ids(),
    receivers: random.ids()
  }
}
