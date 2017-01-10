const random = require('./random')

module.exports = () => {
  return {
    max_update_rate_ms: random.ms(),
    resource_path: `/${random.type()}`,
    params: random.tags(),
    persist: random.bool(),
    secure: random.bool(),
    ws_href: random.url(),
    id: random.id()
  }
}
