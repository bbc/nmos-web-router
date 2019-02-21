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

let chance = require('chance')()

const types = [
  'flows',
  'sources',
  'nodes',
  'devices',
  'senders',
  'receivers'
]

module.exports = (collections, api, utils) => {
  let events = {
    route () {
      if (collections.receivers.data.length === 0) return
      let receiver = chance.pickone(collections.receivers.data)
      let flowsWidthSenders = collections.senders.data.map(sender => {
        return sender.flow_id
      })
      let flows = collections.flows.where(flow => {
        return flow.format === receiver.format && flowsWidthSenders.includes(flow.id)
      })
      if (flows.length === 0) return
      let flow = chance.pickone(flows)
      let senders = collections.senders.where(sender => {
        return sender.flow_id === flow.id
      })
      if (senders.length === 0) return
      let sender = chance.pickone(senders)
      api.route(receiver.id, sender)
    },
    unroute () {
      if (collections.receivers.data.length === 0) return
      let receiver = chance.pickone(collections.receivers.data)
      api.unroute(receiver.id)
    },
    add (type) {
      utils.add[type](1)
    },
    remove (type) {
      utils.remove[type](1)
    }
  }

  let timeout = null

  function randomTime (range) {
    range = range || {min: 0, max: 3}
    let multiplier = chance.integer(range)
    let time = chance.millisecond() * multiplier + 500
    if (time < range.min * 1000) time += range.min * 1000
    if (time > range.max * 1000) time = range.max * 1000
    return time
  }

  return {
    start (range) {
      clearTimeout(timeout)
      let time = randomTime(range)
      if (typeof range === 'number' && range > 0) time = range
      timeout = setTimeout(() => {
        let event = chance.pickone(Object.keys(events))
        let type = chance.pickone(types)
        events[event](type)
        this.start(range)
      }, time)
    },
    stop () {
      clearTimeout(timeout)
      timeout = null
    }
  }
}
