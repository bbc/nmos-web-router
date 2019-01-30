import dispatchError from './error-dispatcher'
import dispatchInfo from './info-dispatcher'
import throttle from 'lodash.throttle'

const MAX_RETRIES = 3
const RETRY_TIMEOUT = 1000
const MAX_UPDATE_SPEED_MS = 1000

export default (actions) => {
  let retries = {
    receivers: 0,
    senders: 0,
    flows: 0
  }

  let actionQueue = []
  const throttledActionsUpdate = throttle(() => {
    // send the entire queue to React Store
    actions.update(actionQueue) // bulk action middleware will update store in one go
    // empty the queue
    actionQueue = []
  }, MAX_UPDATE_SPEED_MS)

  function initialise (name) {
    // Only perform an initial GET for stub data, otherwise just use WebSockets
    if (window.nmos.stub) {
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
    } else {
      let data = {}
      data[name] = []
      actions.initialise(data)
    }
  }

  function subscribe (name) {
    let showOpenedMessage = false
    let subscription = window.nmos.subscription[name]()
    subscription.connect()
    subscription.subscribe({
      open () {
        if (showOpenedMessage) dispatchInfo(actions)(`Connected to ${name}`)
        showOpenedMessage = true
      },
      update (data) {
        showOpenedMessage = true
        // create the action
        let action = { update: { [name]: data.grain.data }, name: name }
        // add new messages to queue
        actionQueue.push(action)
        // empty the queue at rate limited speed
        throttledActionsUpdate()
        actions.update()
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
