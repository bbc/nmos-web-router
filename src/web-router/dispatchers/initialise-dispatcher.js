/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import dispatchError from './error-dispatcher'
import dispatchInfo from './info-dispatcher'
import initialiseSignin from './security/signin-initialise-dispatcher'

const MAX_RETRIES = 3
const RETRY_TIMEOUT = 1000

export default (actions) => {
  let retries = {
    receivers: 0,
    senders: 0,
    flows: 0
  }

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
      .catch(error => {
        dispatchError(actions)(error)
      })
    subscription.subscribe({
      open () {
        if (showOpenedMessage) dispatchInfo(actions)(`Connected to ${name}`)
        showOpenedMessage = true
        actions.status({status: 'Connected'})
      },
      update (data) {
        if (data.type === 'error') dispatchError(actions)(data.data)
        else {
          showOpenedMessage = true
          let update = {}
          update[name] = data.grain.data
          actions.update({
            update,
            name: name
          })
        }
      },
      close () {
        showOpenedMessage = true
        dispatchError(actions)(`Disconnected from ${name}`)
        actions.status({status: 'Disconnected'})
      },
      error (error) {
        showOpenedMessage = true
        dispatchError(actions)(`Error occured on ${name}, ${error}`)
        actions.status({status: 'Error'})
      }
    })
  }

  return () => {
    if (window.nmos.error) {
      console.error(window.nmos.error)
      actions.initialiseError({ error: window.nmos.error, name: 'nmos' })
    } else {
      initialiseSignin(actions)()
      initialise('receivers')
      initialise('senders')
      initialise('flows')
      subscribe('receivers')
      subscribe('senders')
      subscribe('flows')
    }
  }
}
