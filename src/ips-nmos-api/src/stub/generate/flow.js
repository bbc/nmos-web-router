const random = require('./random')

module.exports = () => {
  return {
    id: random.id(),
    label: random.label(),
    description: random.description(),
    format: random.format(),
    tags: random.tags(),
    source_id: random.id(),
    parents: random.ids()
  }
}
