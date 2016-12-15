const noop = function () {}

module.exports = (getters, WebSocket, subscriptions, type) => {
  let opens = []
  let updates = []
  let errors = []
  let closes = []
  let pollings = []

  let status = 'closed'
  let ws = null
  let polling = {
    fallback: true,
    interval: 1 * 1000,
    subscriptionInterval: 10 * 1000,
    intervalToken: null,
    subscriptionToken: null
  }

  let getter = getters[type]
  function get () {
    getter()
      .then(data => {
        updates.forEach(callback => {
          callback({
            grain: {
              data: data.map(d => {
                return {
                  pre: d,
                  post: d
                }
              })
            }
          })
        })
      })
      .catch(error => {
        status = 'error'
        error.type = 'could-not-subscribe'
        errors.forEach(callback => {
          callback(error)
        })
      })
  }
  let connect = () => {
    clearInterval(polling.intervalToken)
    clearTimeout(polling.subscriptionToken)
    subscriptions()
      .then(subscriptions => {
        let subscription = subscriptions.filter(subscription => {
          return subscription.resource_path === `/${type}`
        })[0]
        if (subscription === undefined) {
          status = 'polling'
          pollings.forEach(callback => {
            callback()
          })
          polling.intervalToken = setInterval(() => {
            get()
          }, polling.interval)
          polling.subscriptionToken = setTimeout(connect, polling.subscriptionInterval)
        } else {
          ws = new WebSocket(subscription.ws_href)
          if (typeof ws.onopen !== undefined) {
            ws.onopen = () => {
              status = 'opened'
              opens.forEach(callback => {
                callback()
              })
            }
          } else {
            ws.on('open', () => {
              status = 'opened'
              opens.forEach(callback => {
                callback()
              })
            })
          }

          if (typeof ws.onmessage !== undefined) {
            ws.onmessage = (evt) => {
              let data = JSON.parse(evt.data)
              updates.forEach(callback => {
                callback(data)
              })
            }
          } else {
            ws.on('message', (data) => {
              updates.forEach(callback => {
                callback(data)
              })
            })
          }

          if (typeof ws.onclose !== undefined) {
            ws.onclose = () => {
              status = 'closed'
              closes.forEach(callback => {
                callback()
              })
            }
          } else {
            ws.on('close', () => {
              status = 'closed'
              closes.forEach(callback => {
                callback()
              })
            })
          }

          if (typeof ws.onerror !== undefined) {
            ws.onerror = () => {
              status = 'errored'
              errors.forEach(callback => {
                callback()
              })
            }
          } else {
            ws.on('error', () => {
              status = 'errored'
              errors.forEach(callback => {
                callback()
              })
            })
          }
        }
      })
      .catch((error) => {
        console.error(error)
        status = 'polling'
        console.log('polling')
      })
  }

  let subscription = {
    pollOptions ({pollingFallback, pollingInterval, pollSubscriptionsInterval}) {
      if (pollingFallback === undefined) pollingFallback = true
      if (pollingInterval === undefined) pollingInterval = 1000
      if (pollSubscriptionsInterval === undefined) pollSubscriptionsInterval = 10 * 1000
    },
    status () {
      return status
    },
    connect () {
      if (status === 'closed' || status === 'error') connect()
    },
    disconnect () {
      if (ws !== null && ws.close) ws.close()
      clearInterval(polling.intervalToken)
      clearTimeout(polling.subscriptionToken)
    },
    subscribe ({opened, updated, errored, closed, polling}) {
      opened = opened || noop
      updated = updated || noop
      errored = errored || noop
      closed = closed || noop
      polling = polling || noop

      opens.push(opened)
      updates.push(updated)
      errors.push(errored)
      closes.push(closed)
      pollings.push(polling)

      subscription.connect()

      return updates.length
    },
    unsubscribe (token) {
      updates[token] = noop
      errors[token] = noop
      closes[token] = noop
      pollings[token] = noop
    }
  }

  return subscription
}
