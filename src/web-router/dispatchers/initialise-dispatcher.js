const MAX_RETRIES = 3
const RETRY_TIMEOUT = 1000

export default (actions) => {
  let retries = {
    receivers: 0,
    senders: 0,
    flows: 0
  }

  function initialise (name) {
    window.nmos[name]()
      .then(response => {
        let data = {}
        data[name] = response
        actions.initialise(data)
      })
      .catch(error => {
        console.error(error)
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
