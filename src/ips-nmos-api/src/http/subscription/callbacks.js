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

const noop = () => {}

module.exports = () => {
  let updates = []
  let opens = []
  let closes = []
  let errors = []

  return {
    update (data) {
      updates.forEach(callback => {
        callback(data)
      })
    },
    open () {
      opens.forEach(callback => {
        callback()
      })
    },
    close () {
      closes.forEach(callback => {
        callback()
      })
    },
    error (error) {
      errors.forEach(callback => {
        callback(error)
      })
    },
    push ({update, open, close, error}) {
      updates.push(update || noop)
      opens.push(open || noop)
      closes.push(close || noop)
      errors.push(error || noop)
      return updates.length - 1
    },
    pop (token) {
      if (updates[token]) {
        updates[token] = noop
        opens[token] = noop
        closes[token] = noop
        errors[token] = noop
      }
    }
  }
}
