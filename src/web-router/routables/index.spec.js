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
    senders.forEach((sender, index) => {
      if (index < 4) sender.flow_id = flows[0].id
      else if (index < 7) sender.flow_id = flows[1].id
      else if (index < 9) sender.flow_id = flows[2].id

      if (index > 2) sender.label = 'something else'
    })

    senders[0].label = 'label value'
    senders[1].label = 'before label value after'
    senders[2].label = 'XlXaXbXeXlX XvXaXlXuXeX'
  }

  function initReceivers () {
    receivers.forEach((receiver, index) => {
      receiver.subscription.sender_id = null

      if (index < 4) receiver.subscription.sender_id = senders[index].id
      else if (index < 7) receiver.subscription.sender_id = generate.random.id()

      if (index > 2) receiver.label = 'something else'
    })

    receivers[0].label = 'label value'
    receivers[1].label = 'before label value after'
    receivers[2].label = 'XlXaXbXeXlX XvXaXlXuXeX'
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
      view.senders.forEach((sender, index) => {
        if (index < 4) expect(sender.format).toBe(flows[0].format)
        else if (index < 7) expect(sender.format).toBe(flows[1].format)
        else if (index < 9) expect(sender.format).toBe(flows[2].format)
        else expect(sender.format).toBe('no')
      })
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
      view.senders.forEach((sender, index) => {
        if (index < 4) expect(sender.node.state).toContain('routed')
        else expect(sender.node.state).toContain('unrouted')
      })
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
      view.receivers.forEach((receiver, index) => {
        if (index < 7) expect(receiver.node.state).toContain('routed')
        else expect(receiver.node.state).toContain('unrouted')
      })
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
