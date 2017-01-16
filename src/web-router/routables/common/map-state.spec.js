import mapState from './map-state'

describe('map state', () => {
  it('is immutable', () => {
    let routable = {}
    routable.state = mapState(routable)
      .contract()
      .state()

    expect(routable.state).toContain('contracted')

    mapState(routable).expand()

    expect(routable.state).toContain('contracted')
    expect(routable.state).not.toContain('expanded')
  })

  function itContainsOneStateAndNotTheOtherAndViseVersaWhen ({toFunc, fromFunc, toState, fromState}) {
    it(`${toFunc} will set state to ${toState} and remove ${fromState}`, () => {
      let routable = {}
      routable.state = mapState(routable)[fromFunc]()[toFunc]().state()

      if (toState !== 'blank') expect(routable.state).toContain(toState)
      expect(routable.state).not.toContain(fromState)
    })

    it(`${fromFunc} will set state to ${fromState} and remove ${toState}`, () => {
      let routable = {}
      routable.state = mapState(routable)[toFunc]()[fromFunc]().state()

      if (fromState !== 'blank') expect(routable.state).toContain(fromState)
      expect(routable.state).not.toContain(toState)
    })
  }

  [{
    toFunc: 'contract',
    fromFunc: 'expand',
    toState: 'contracted',
    fromState: 'expanded'
  }, {
    toFunc: 'fuzzymatch',
    fromFunc: 'fuzzymissmatch',
    toState: 'fuzzymatch',
    fromState: 'fuzzymissmatch'
  }, {
    toFunc: 'check',
    fromFunc: 'uncheck',
    toState: 'checked',
    fromState: 'unchecked'
  }, {
    toFunc: 'other',
    fromFunc: 'notOther',
    toState: 'other',
    fromState: 'blank'
  }, {
    toFunc: 'selectable',
    fromFunc: 'notSelectable',
    toState: 'selectable',
    fromState: 'blank'
  }, {
    toFunc: 'disable',
    fromFunc: 'enable',
    toState: 'disabled',
    fromState: 'blank'
  }, {
    toFunc: 'route',
    fromFunc: 'unroute',
    toState: 'routed',
    fromState: 'unrouted'
  }, {
    toFunc: 'routing',
    fromFunc: 'unrouting',
    toState: 'routing',
    fromState: 'unrouting'
  }, {
    toFunc: 'remove',
    fromFunc: 'unremove',
    toState: 'removed',
    fromState: 'blank'
  }].forEach(itContainsOneStateAndNotTheOtherAndViseVersaWhen)
})
