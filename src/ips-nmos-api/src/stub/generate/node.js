const random = require('./random')

module.exports = () => {
  return {
    id: random.id(),
    label: random.label(),
    href: random.url(),
    hostname: random.hostname(),
    caps: random.caps(),
    services: random.services()
  }
}
