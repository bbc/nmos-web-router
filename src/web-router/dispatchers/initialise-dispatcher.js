import discovery from '../../ips-api/discovery'

const MAX_RETRIES = 3
const RETRY_TIMEOUT = 1000

export default (actions) => {
  let retries = {
    receivers: 0,
    senders: 0,
    flows: 0
  }

  function initialise (name) {
    let usestub = window.location.search.includes('stub')

    let baseUrl = 'http://ipstudio-discovery.rd.bbc.co.uk:8870'
    if (window.location.search.includes('base-url=')) baseUrl = window.location.search
        .replace('?', '')
        .split('&')
        .filter(query => {
          return query.includes('base-url=')
        })
        .map(query => {
          return query.replace('base-url=', '')
        })[0]

    discovery(usestub, baseUrl)[name]()
      .then(response => {
        let data = {}
        data[name] = response
        actions.initialise(data)
        actions.updateConnections()
      })
      .catch(error => {
        retries[name] += 1
        if (retries[name] >= MAX_RETRIES) actions.initialiseError({ error, name })
        else setTimeout(function () {
          initialise(name)
        }, RETRY_TIMEOUT)
      })
  }

  return () => {
    initialise('receivers')
    initialise('senders')
    initialise('flows')
  }
}
