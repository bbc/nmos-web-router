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
const removed = 'removed'
const blank = ''

const routableStates = [
  fuzzymissmatch,
  fuzzymatch,
  unchecked,
  checked,
  expanded,
  contracted,
  other,
  selectable,
  disabled,
  removed
]

const nodeStates = [
  routed,
  unrouted,
  unrouting,
  removed
]

function initialStringArray (states) {
  let arr = Array.apply(null, Array(states.length))
  return arr
    .map(() => {
      return ''
    })
}

function changeStates (states, state, add, remove) {
  if (add) {
    let index = states.indexOf(add)
    state[index] = add
  }
  if (remove) {
    let index = states.indexOf(remove)
    state[index] = ''
  }
}

let ChangeState = (routable) => {
  routable.state = routable.state || initialStringArray(routableStates)
  routable.node = routable.node || {
    state: initialStringArray(nodeStates)
  }

  function changeRoutableStates (add, remove) {
    changeStates(routableStates, routable.state, add, remove)
  }

  function changeNodeStates (add, remove) {
    changeStates(nodeStates, routable.node.state, add, remove)
  }

  let changeState = {
    fuzzymatch () {
      changeRoutableStates(fuzzymatch, fuzzymissmatch)
      return changeState
    },
    fuzzymissmatch () {
      changeRoutableStates(fuzzymissmatch, fuzzymatch)
      return changeState
    },
    check () {
      changeRoutableStates(checked, unchecked)
      return changeState
    },
    uncheck () {
      changeRoutableStates(unchecked, checked)
      return changeState
    },
    contract () {
      changeRoutableStates(contracted, expanded)
      return changeState
    },
    expand () {
      changeRoutableStates(expanded, contracted)
      return changeState
    },
    other () {
      changeRoutableStates(other, blank)
      return changeState
    },
    notOther () {
      changeRoutableStates(blank, other)
      return changeState
    },
    selectable () {
      changeRoutableStates(selectable, blank)
      return changeState
    },
    notSelectable () {
      changeRoutableStates(blank, selectable)
      return changeState
    },
    disable () {
      changeRoutableStates(disabled, blank)
      return changeState
    },
    enable () {
      changeRoutableStates(blank, disabled)
      return changeState
    },
    route () {
      changeNodeStates(routed, unrouted)
      return changeState
    },
    unroute () {
      changeNodeStates(unrouted, routed)
      return changeState
    },
    unrouting () {
      changeNodeStates(unrouting, routed)
      changeNodeStates(unrouting, unrouted)
      return changeState
    },
    remove () {
      changeRoutableStates(removed, blank)
      changeNodeStates(removed, blank)
      return changeState
    },
    unremove () {
      changeRoutableStates(blank, removed)
      changeNodeStates(blank, removed)
      return changeState
    }
  }
  return changeState
}

export default ChangeState
