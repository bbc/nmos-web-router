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
const removed = 'removed'

export default (routable) => {
  routable.state = routable.state || ''
  routable.node = routable.node || {
    state: ''
  }
  let changeState = {
    fuzzymatch () {
      routable.state = routable.state.replace(fuzzymissmatch, fuzzymatch)
      if (!routable.state.includes(fuzzymatch)) routable.state += ' ' + fuzzymatch
      return changeState
    },
    fuzzymissmatch () {
      routable.state = routable.state.replace(fuzzymatch, fuzzymissmatch)
      if (!routable.state.includes(fuzzymissmatch)) routable.state += ' ' + fuzzymissmatch
      return changeState
    },
    check () {
      routable.state = routable.state.replace(unchecked, checked)
      if (!routable.state.includes(checked)) routable.state += ' ' + checked
      return changeState
    },
    uncheck () {
      if (routable.state.includes(unchecked)) return changeState
      else if (routable.state.includes(checked)) routable.state = routable.state.replace(checked, unchecked)
      else routable.state += ' ' + unchecked
      return changeState
    },
    contract () {
      routable.state = routable.state.replace(expanded, contracted)
      if (!routable.state.includes(contracted)) routable.state += ' ' + contracted
      return changeState
    },
    expand () {
      routable.state = routable.state.replace(contracted, expanded)
      if (!routable.state.includes(expanded)) routable.state += ' ' + expanded
      return changeState
    },
    other () {
      if (!routable.state.includes(other)) routable.state += ' ' + other
      return changeState
    },
    notOther () {
      routable.state = routable.state.replace(other, '')
      return changeState
    },
    selectable () {
      if (!routable.state.includes(selectable)) routable.state += ' ' + selectable
      return changeState
    },
    notSelectable () {
      routable.state = routable.state.replace(selectable, '')
      return changeState
    },
    disable () {
      if (!routable.state.includes(disabled)) routable.state += ' ' + disabled
      return changeState
    },
    enable () {
      routable.state = routable.state.replace(disabled, '')
      return changeState
    },
    route () {
      routable.node.state = routed
      routable.node.state = routable.node.state.replace(unrouted, routed)
      if (!routable.node.state.includes(routed)) routable.node.state += ' ' + routed
      return changeState
    },
    unroute () {
      if (routable.node.state.includes(unrouted)) return changeState
      else if (routable.node.state.includes(routed)) routable.node.state = routable.node.state.replace(routed, unrouted)
      else routable.node.state += ' ' + unrouted
      return changeState
    },
    remove () {
      if (!routable.state.includes(removed)) routable.state += ' ' + removed
      if (!routable.node.state.includes(removed)) routable.node.state += ' ' + removed
      return changeState
    },
    unremove () {
      routable.state = routable.state.replace(removed, '')
      routable.node.state = routable.node.state.replace(removed, '')
      return changeState
    }
  }
  return changeState
}
