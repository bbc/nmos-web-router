import Filter from './'

describe('filter', () => {
  it('matches againt lowercase label', () => {
    let senders = [{
      label: 'Some Term in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let receivers = [{
      label: 'Some Term in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let filter = Filter({senders, receivers})

    let data = filter('term').view()

    expect(data.senders[0].state).toContain('fuzzymatch')
    expect(data.senders[1].state).toContain('fuzzymissmatch')

    expect(data.receivers[0].state).toContain('fuzzymatch')
    expect(data.receivers[1].state).toContain('fuzzymissmatch')
  })

  it('matches againt lowercase id', () => {
    let senders = [{
      label: 'none in here',
      id: 'abcd-term-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let receivers = [{
      label: 'none in here',
      id: 'abcd-term-efg',
      state: [],
      stateString: ''
    }, {
      label: 'none in here',
      id: 'abcd-efg',
      state: [],
      stateString: ''
    }]

    let filter = Filter({senders, receivers})

    let data = filter('term').view()

    expect(data.senders[0].state).toContain('fuzzymatch')
    expect(data.senders[1].state).toContain('fuzzymissmatch')

    expect(data.receivers[0].state).toContain('fuzzymatch')
    expect(data.receivers[1].state).toContain('fuzzymissmatch')
  })
})
