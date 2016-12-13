const MAX_RETRIES = 3
const RETRY_TIMEOUT = 1000

export default (actions) => {
  let retries = {
    receivers: 0,
    senders: 0,
    flows: 0
  }

  function dispatchError (error) {
    let message = error
    if (error.message) message = error.message
    console.error(error)
    let timeout = setTimeout(function () {
      actions.allClear()
    }, 30 * 1000)
    actions.alert({
      message,
      timeout
    })
  }

  function initialise (name) {
    window.nmos[name]()
      .then(response => {
        let data = {}
        data[name] = response
        actions.initialise(data)
      })
      .catch(error => {
        dispatchError(error)
        retries[name] += 1
        if (retries[name] >= MAX_RETRIES) actions.initialiseError({ error, name })
        else {
          setTimeout(function () {
            initialise(name)
          }, RETRY_TIMEOUT)
        }
      })
  }

  function subscribe (name) {
    window.nmos.subscription[name].subscribe(data => {
      let update = {}
      update[name] = data.grain.data
      actions.update({
        update,
        name: name
      })
    }, dispatchError)
  }

  return () => {
    initialise('receivers')
    initialise('senders')
    initialise('flows')
    subscribe('receivers')
    subscribe('senders')
    subscribe('flows')
  }
}
