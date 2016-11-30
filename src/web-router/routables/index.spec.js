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

  it('Filters', () => {
    routables.filter('label value')
    let view = routables.view()
    for (let i = 0; i < 3; i++) {
      expect(view.senders[i].state).toContain('fuzzymatch')
      expect(view.receivers[i].state).toContain('fuzzymatch')
    }

    for (let i = 3; i < 10; i++) {
      expect(view.senders[i].state).toContain('fuzzymissmatch')
      expect(view.receivers[i].state).toContain('fuzzymissmatch')
    }
  })

  // it('Does everything you need to but not the HTTP stuff', () => {
  //   let receivers = []
  //   let senders = []
  //   let flows = []
  //   let devices = []
  //   let nodes = []
  //
  //   let receiverId = ''
  //   let senderId = ''
  //   let sender = {}
  //   let grain = {}
  //
  //   let term = ''
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
  //   routables.update.devices(grain)
  //   routables.update.nodes(grain)
  //
  //   routables.filter(term)
  //   routables.check.receiver(receiverId)
  //   routables.check.sender(senderId)
  // })
})
