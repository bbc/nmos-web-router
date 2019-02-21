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

const fuzzymissmatch = 'fuzzymissmatch'
const fuzzymatch = 'fuzzymatch'
const unchecked = 'unchecked'
const checked = 'checked'
const expanded = 'expanded'
const contracted = 'contracted'
const other = 'other'
const selectable = 'selectable'
const disabled = 'disabled'
const routed = 'routed'
const unrouted = 'unrouted'
const unrouting = 'unrouting'
const routing = 'routing'
const removed = 'removed'
const expired = 'expired'
const stagedRoute = 'stagedRoute'
const stagedUnroute = 'stagedUnroute'
const blank = ''

const list = [
  fuzzymissmatch,
  fuzzymatch,
  unchecked,
  checked,
  expanded,
  contracted,
  other,
  selectable,
  disabled,
  removed,
  routed,
  unrouted,
  unrouting,
  routing,
  expired,
  stagedRoute,
  stagedUnroute
]

function initial () {
  let arr = Array.apply(null, Array(list.length))
  return arr
    .map(() => {
      return ''
    })
}

export default (routable) => {
  let state = initial()
  if (routable.hasOwnProperty('state')) state = [].concat(routable.state)

  function change (add, remove) {
    if (add) {
      let index = list.indexOf(add)
      state[index] = add
    }
    if (remove) {
      let index = list.indexOf(remove)
      state[index] = ''
    }
  }

  let changeState = {
    fuzzymatch () {
      change(fuzzymatch, fuzzymissmatch)
      return changeState
    },
    fuzzymissmatch () {
      change(fuzzymissmatch, fuzzymatch)
      return changeState
    },
    check () {
      change(checked, unchecked)
      return changeState
    },
    uncheck () {
      change(unchecked, checked)
      return changeState
    },
    contract () {
      change(contracted, expanded)
      return changeState
    },
    expand () {
      change(expanded, contracted)
      return changeState
    },
    other () {
      change(other, blank)
      return changeState
    },
    notOther () {
      change(blank, other)
      return changeState
    },
    selectable () {
      change(selectable, blank)
      return changeState
    },
    notSelectable () {
      change(blank, selectable)
      return changeState
    },
    disable () {
      change(disabled, blank)
      return changeState
    },
    enable () {
      change(blank, disabled)
      return changeState
    },
    route () {
      change(routed, unrouted)
      return changeState
    },
    unroute () {
      change(unrouted, routed)
      return changeState
    },
    routing () {
      change(routing, unrouting)
      return changeState
    },
    unrouting () {
      change(unrouting, routing)
      return changeState
    },
    remove () {
      change(removed, blank)
      return changeState
    },
    unremove () {
      change(blank, removed)
      return changeState
    },
    expire () {
      change(expired)
      return changeState
    },
    stageRoute () {
      change(stagedRoute, unrouted)
      return changeState
    },
    deployRoute () {
      change(routed, stagedRoute)
      return changeState
    },
    stageUnroute () {
      change(stagedUnroute, routed)
      return changeState
    },
    deployUnroute () {
      change(unrouted, stagedUnroute)
      return changeState
    },
    unstageRoute () {
      change(unrouted, stagedRoute)
      return changeState
    },
    unstageUnroute () {
      change(routed, stagedUnroute)
      return changeState
    },
    stageMulti () {
      change(stagedRoute, routed)
      return changeState
    },
    unstageMulti () {
      change(routed, stagedRoute)
      return changeState
    },
    state () {
      return state
    }
  }
  return changeState
}
