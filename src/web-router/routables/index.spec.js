import Routables from './'
import generate from '../../ips-nmos-api/src/stub/generate'

// sender
// format:"urn:x-nmos:format:video"
// node: {state: Array[strings]}
// state: Array[strings]

// receiver
// subscription:
    // routed:{sender}
    // routing:Array[{sender}]
    // unrouting:Array[{sender}]
// state:Array[10]
// node: {state: Array[strings]}

describe('Routables', () => {
  let routables, senders, receivers, flows

  function initSenders () {
    senders[0].flow_id = flows[0].id
    senders[1].flow_id = flows[0].id
    senders[2].flow_id = flows[0].id
    senders[3].flow_id = flows[0].id

    senders[4].flow_id = flows[1].id
    senders[5].flow_id = flows[1].id
    senders[6].flow_id = flows[1].id

    senders[7].flow_id = flows[2].id
    senders[8].flow_id = flows[2].id

    senders[0].label = 'label value'
    senders[1].label = 'before label value after'
    senders[2].label = 'XlXaXbXeXlX XvXaXlXuXeX'

    senders[3].label = 'something else'
    senders[4].label = 'something else'
    senders[5].label = 'something else'
    senders[6].label = 'something else'
    senders[7].label = 'something else'
    senders[8].label = 'something else'
    senders[9].label = 'something else'
  }

  function initReceivers () {
    receivers = receivers.map(receiver => {
      receiver.subscription.sender_id = null
      return receiver
    })

    receivers[0].subscription.sender_id = senders[0].id
    receivers[1].subscription.sender_id = senders[1].id
    receivers[2].subscription.sender_id = senders[2].id
    receivers[3].subscription.sender_id = senders[3].id

    receivers[4].subscription.sender_id = generate.random.id()
    receivers[5].subscription.sender_id = generate.random.id()
    receivers[6].subscription.sender_id = generate.random.id()

    receivers[0].label = 'label value'
    receivers[1].label = 'before label value after'
    receivers[2].label = 'XlXaXbXeXlX XvXaXlXuXeX'

    receivers[3].label = 'something else'
    receivers[4].label = 'something else'
    receivers[5].label = 'something else'
    receivers[6].label = 'something else'
    receivers[7].label = 'something else'
    receivers[8].label = 'something else'
    receivers[9].label = 'something else'
  }

  beforeEach(() => {
    routables = Routables()

    senders = generate.senders(10)
    receivers = generate.receivers(10)
    flows = generate.flows(3)

    initSenders()
    initReceivers()

    routables.insert.senders(senders)
    routables.insert.receivers(receivers)
    routables.insert.flows(flows)
  })

  describe('Insert', () => {
    it('Updates format of senders after flows have been inserted', () => {
      let view = routables.view()
      expect(view.senders[0].format).toBe(flows[0].format)
      expect(view.senders[1].format).toBe(flows[0].format)
      expect(view.senders[2].format).toBe(flows[0].format)
      expect(view.senders[3].format).toBe(flows[0].format)

      expect(view.senders[4].format).toBe(flows[1].format)
      expect(view.senders[5].format).toBe(flows[1].format)
      expect(view.senders[6].format).toBe(flows[1].format)

      expect(view.senders[7].format).toBe(flows[2].format)
      expect(view.senders[8].format).toBe(flows[2].format)

      expect(view.senders[9].format).toBe('no')
    })

    it('Sets the initial state for all senders', () => {
      let view = routables.view()
      view.senders.forEach(sender => {
        expect(sender.state).toContain('checked')
        expect(sender.state).toContain('contracted')
        expect(sender.state).toContain('selectable')
      })
    })

    it('Sets the initial node state for all senders', () => {
      let view = routables.view()
      expect(view.senders[0].node.state).toContain('routed')
      expect(view.senders[1].node.state).toContain('routed')
      expect(view.senders[2].node.state).toContain('routed')
      expect(view.senders[3].node.state).toContain('routed')

      expect(view.senders[4].node.state).toContain('unrouted')
      expect(view.senders[5].node.state).toContain('unrouted')
      expect(view.senders[6].node.state).toContain('unrouted')
      expect(view.senders[7].node.state).toContain('unrouted')
      expect(view.senders[9].node.state).toContain('unrouted')
    })

    it('Sets the initial state for all receivers', () => {
      let view = routables.view()
      view.receivers.forEach(receiver => {
        expect(receiver.state).toContain('checked')
        expect(receiver.state).toContain('contracted')
        expect(receiver.state).not.toContain('selectable')
      })
    })

    it('Sets the initial node state for all receivers', () => {
      let view = routables.view()
      expect(view.receivers[0].node.state).toContain('routed')
      expect(view.receivers[1].node.state).toContain('routed')
      expect(view.receivers[2].node.state).toContain('routed')
      expect(view.receivers[3].node.state).toContain('routed')

      expect(view.receivers[4].node.state).toContain('routed')
      expect(view.receivers[5].node.state).toContain('routed')
      expect(view.receivers[6].node.state).toContain('routed')

      expect(view.receivers[7].node.state).toContain('unrouted')
      expect(view.receivers[9].node.state).toContain('unrouted')
    })
  })

  function expectRoutableToBeFiltered (routable, index) {
    if (index < 3) expect(routable.state).toContain('fuzzymatch')
    else expect(routable.state).toContain('fuzzymissmatch')
  }

  it('Filters', () => {
    routables.filter('label value')
    let view = routables.view()
    view.senders.forEach((routable, index) => {
      expectRoutableToBeFiltered(routable, index)
    })
    view.receivers.forEach((routable, index) => {
      expectRoutableToBeFiltered(routable, index)
    })
  })

  it('Check will change state to unchecked if state is checked', () => {
    routables.check.sender(senders[0].id)
    routables.check.receiver(receivers[0].id)

    let view = routables.view()

    expect(view.senders[0].state).toContain('unchecked')
    expect(view.receivers[0].state).toContain('unchecked')
  })

  it('Check will change state to checked if state is unchecked', () => {
    routables.check.sender(senders[0].id)
    routables.check.receiver(receivers[0].id)

    routables.check.sender(senders[0].id)
    routables.check.receiver(receivers[0].id)

    let view = routables.view()

    expect(view.senders[0].state).toContain('checked')
    expect(view.receivers[0].state).toContain('checked')
  })

  // it('Does everything you need to but not the HTTP stuff', () => {
  //   let receiverId = ''
  //   let senderId = ''
  //   let sender = {}
  //   let grain = {}
  //
  //   routables.expand(senderId)
  //
  //   let routablesView = routables.view()
  //   routablesView.expanded
  //   routablesView.senders
  //   routablesView.receivers
  //   routablesView.routes
  //
  //   routables.route(receiverId, sender)
  //   routables.unroute(receiverId)
  //   routables.update.receivers(grain)
  //   routables.update.senders(grain)
  //   routables.update.flows(grain)
  // })
})
