const random = require('./random')

module.exports = () => {
  return {
    id: random.id(),
    label: random.label(),
    description: random.description(),
    format: random.format(),
    caps: random.caps(),
    tags: random.tags(),
    device_id: random.id(),
    parents: random.ids()
  }
}
