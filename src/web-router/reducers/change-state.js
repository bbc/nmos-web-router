export default (routable) => {
  let changeState = {
    toggle () {
      return changeState
    },
    selectable () {
      return changeState
    },
    fuzzymatch () {
      routable.state = routable.state.replace('fuzzymissmatch', 'fuzzymatch')
      if (!routable.state.includes('fuzzymatch')) routable.state += ' fuzzymatch'
      return changeState
    },
    fuzzymissmatch () {
      routable.state = routable.state.replace('fuzzymatch', 'fuzzymissmatch')
      if (!routable.state.includes('fuzzymissmatch')) routable.state += ' fuzzymissmatch'
      return changeState
    },
    check () {
      return changeState
    },
    allVisible () {
      return changeState
    }
  }
  return changeState
}
