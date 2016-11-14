const random = require('./random')

module.exports = () => {
  return {
    description: random.description(),
    format: random.format(),
    tags: random.tags(),
    caps: random.caps(),
    label: random.label(),
    transport: random.transport(),
    device_id: random.id(),
    id: random.id(),
    subscription: random.subscription()
  }
}
