export default (url) => {
  let parser = document.createElement('a')
  parser.href = url

  let query = {}
  let queries = parser.search.replace(/^\?/, '').replace(/\/$/, '').split('&')
  for (let i = 0; i < queries.length; i++) {
    let split = queries[i].split('=')
    let value = split[1] || ''
    query[split[0]] = {}
    query[split[0]].string = value
    query[split[0]].decode = decodeURIComponent(value)
    query[split[0]].number = parseInt(value)
    query[split[0]].boolean = value === 'true' || value === ''
  }
  return {
    protocol: parser.protocol,
    host: parser.host,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    query: function (name) {
      let defaultQuery = {
        boolean: false,
        number: NaN,
        string: '',
        decode: ''
      }
      if (!query.hasOwnProperty(name)) return defaultQuery
      return query[name]
    },
    hash: parser.hash
  }
}
