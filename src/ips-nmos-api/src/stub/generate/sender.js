const random = require('./random')

module.exports = () => {
  return {
    description: random.description(),
    tags: random.tags(),
    label: random.label(),
    transport: random.transport(),
    device_id: random.id(),
    flow_id: random.id(),
    id: random.id()
  }
}
