import dispatchError from './error-dispatcher'
import dispatchInfo from './info-dispatcher'

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
        dispatchError(actions)(error)
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
    let showOpenedMessage = false
    let subscription = window.nmos.subscription[name]()
    subscription.connect({'connection': {'params': {'query.downgrade': 'v1.0'}}})
    subscription.subscribe({
      open () {
        if (showOpenedMessage) dispatchInfo(actions)(`Connected to ${name}`)
        showOpenedMessage = true
      },
      update (data) {
        showOpenedMessage = true
        let update = {}
        update[name] = data.grain.data
        actions.update({
          update,
          name: name
        })
      },
      close () {
        showOpenedMessage = true
        dispatchError(actions)(`Disconnected from ${name}`)
      },
      error (error) {
        showOpenedMessage = true
        dispatchError(actions)(`Error occured on ${name}, ${error}`)
      }
    })
  }

  return () => {
    if (window.nmos.error) {
      console.error(window.nmos.error)
      actions.initialiseError({ error: window.nmos.error, name: 'nmos' })
    } else {
      initialise('receivers')
      initialise('senders')
      initialise('flows')
      subscribe('receivers')
      subscribe('senders')
      subscribe('flows')
    }
  }
}
