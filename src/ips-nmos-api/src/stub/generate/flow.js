const random = require('./random')

module.exports = () => {
  let format = random.format()
  return {
    id: random.id(),
    label: random.label(),
    description: random.description(),
    format: format,
    tags: random.tags(),
    source_id: random.id(),
    parents: random.ids(),
    media_type: random.mediaType(format)
  }
}
