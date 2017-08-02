const random = require('./random')

module.exports = () => {
  let format = random.format()
  return {
    description: random.description(),
    format: format,
    tags: random.tags(),
    caps: random.caps(format),
    label: random.label(),
    transport: random.transport(),
    device_id: random.id(),
    id: random.id(),
    subscription: random.subscription()
  }
}
