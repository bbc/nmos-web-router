import Routables from './'
import generate from '../../ips-nmos-api/src/stub/generate'

// sender
// description:""
// device_id:"b686b5d1-4312-49a3-9835-9de979f7fb9d"
// flow_id:"a43657d3-0dd2-4a10-8c68-540e3e7e4e3a"
// id:"c1fcb2c3-5988-46d0-a913-682c66e7f599"
// label:"ap-r310-1 RTPTx"
// manifest_href:"http://172.29.80.31:12345/x-nmos/node/v1.0/self/pipelinemanager/run/pipeline/1/pipel/ipp_rtptx6dd2/misc/sdp/"
// tags:Object
// transport:"urn:x-nmos:transport:rtp.mcast"
// version:"1467817592:130346973"
// format:"urn:x-nmos:format:video"
// node: {state: Array[strings]}
// state: Array[strings]

// receiver
// caps:Object
// description:""
// device_id:"9a4d00e5-d2ca-4015-a703-392c5c3fe8ba"
// format:"urn:x-nmos:format:video"
// id:"a1960e85-9498-4696-8cd9-56eeb37836a5"
// label:"ap-r310-3 RTPRx"
// nodeEl:div.node.routed
// tags:Object
// transport:"urn:x-nmos:transport:rtp"
// type:"receivers"
// version:"1478084487:579275211"
// subscription:
    // sender_id:"96c3b7f8-1b5c-33b4-b416-820dc67d004e"
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
  //   routables.insert.receivers(receivers)
  //   routables.insert.senders(senders)
  //   routables.insert.flows(flows)
  //   routables.insert.devices(devices)
  //   routables.insert.nodes(nodes)
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
