import Routables from './'
import generate from '../../ips-nmos-api/src/stub/generate'

describe('routables', () => {
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

      if (index < 4) {
        receiver.subscription.sender_id = senders[index].id
      } else if (index < 7) {
        receiver.subscription.sender_id = generate.random.id()
      }

      if (index > 2) receiver.label = 'something else'
    })

    receivers[0].label = 'label value'
    receivers[1].label = 'before label value after'
    receivers[2].label = 'XlXaXbXeXlX XvXaXlXuXeX'
  }

  beforeEach(() => {
    routables = Routables({})

    senders = generate.senders(10)
    receivers = generate.receivers(10)
    flows = generate.flows(3)

    initSenders()
    initReceivers()

    routables
      .insert.senders(senders)
      .insert.receivers(receivers)
      .insert.flows(flows)
  })

  it('can be initialised using a view from an old routable', () => {
    let oldView = routables.view()
    let oldSendersCount = oldView.senders.length
    let oldReceiversCount = oldView.receivers.length
    let oldFlowsCount = oldView.flows.length
    let oldRoutesCount = oldView.routes.length

    let newView = Routables(oldView).view()
    expect(newView.senders.length).toBe(oldSendersCount)
    expect(newView.receivers.length).toBe(oldReceiversCount)
    expect(newView.flows.length).toBe(oldFlowsCount)
    expect(newView.routes.length).toBe(oldRoutesCount)
  })

  describe('populates, if any of these fail then the rest is invalid', () => {
    it('receivers', () => {
      let view = routables.view()
      expect(view.receivers.length).toBeGreaterThan(0)
    })

    it('senders', () => {
      let view = routables.view()
      expect(view.senders.length).toBeGreaterThan(0)
    })

    it('routes', () => {
      let view = routables.view()
      expect(view.routes.length).toBeGreaterThan(0)
    })
  })

  describe('inserting', () => {
    it('updates format of senders after flows have been inserted', () => {
      let view = routables.view()
      view.senders.forEach((sender, index) => {
        if (index < 4) expect(sender.format).toBe(flows[0].format)
        else if (index < 7) expect(sender.format).toBe(flows[1].format)
        else if (index < 9) expect(sender.format).toBe(flows[2].format)
        else expect(sender.format).toBe('no')
      })
    })

    it('sets the initial state for all senders', () => {
      let view = routables.view()
      view.senders.forEach(sender => {
        expect(sender.state).toContain('checked')
        expect(sender.state).toContain('contracted')
        expect(sender.state).toContain('selectable')
      })
    })

    it('sets the initial node state for all senders', () => {
      let view = routables.view()
      view.senders.forEach((sender, index) => {
        if (index < 4) expect(sender.state).toContain('routed')
        else expect(sender.state).toContain('unrouted')
      })
    })

    it('sets the initial state for all receivers', () => {
      let view = routables.view()
      view.receivers.forEach(receiver => {
        expect(receiver.state).toContain('checked')
        expect(receiver.state).toContain('contracted')
        expect(receiver.state).not.toContain('selectable')
      })
    })

    it('sets the initial node state for all receivers', () => {
      let view = routables.view()
      view.receivers.forEach((receiver, index) => {
        if (index < 7) expect(receiver.state).toContain('routed')
        else expect(receiver.state).toContain('unrouted')
      })
    })
  })

  function expectRoutableToBeFiltered (routable, index) {
    if (index < 3) expect(routable.state).toContain('fuzzymatch')
    else expect(routable.state).toContain('fuzzymissmatch')
  }

  describe('filtering', () => {
    it('by fuzzymatch and lowercase label', () => {
      let view = routables.filter('label value').view()
      view.senders.forEach((routable, index) => {
        expectRoutableToBeFiltered(routable, index)
      })
      view.receivers.forEach((routable, index) => {
        expectRoutableToBeFiltered(routable, index)
      })
    })

    it('by fuzzymatch and lowercase id', () => {
      let view = routables.filter(senders[7].id).view()
      expect(view.senders[7].state).toContain('fuzzymatch')
    })
  })

  describe('checking', () => {
    it('will change state to unchecked if state is checked', () => {
      let view = routables
        .check.sender(senders[0].id)
        .check.receiver(receivers[0].id)
        .view()

      expect(view.senders[0].state).toContain('unchecked')
      expect(view.receivers[0].state).toContain('unchecked')
    })

    it('will change state to checked if state is unchecked', () => {
      let view = routables
        .check.sender(senders[0].id)
        .check.receiver(receivers[0].id)
        .check.sender(senders[0].id)
        .check.receiver(receivers[0].id)
        .view()

      expect(view.senders[0].state).toContain('checked')
      expect(view.receivers[0].state).toContain('checked')
    })
  })

  describe('expanding', () => {
    it('exapnds sender with matching id', () => {
      let view = routables
        .expand(senders[0].id)
        .view()

      expect(view.senders[0].state).toContain('expanded')
    })

    it('contracts any expanded senders without matching id', () => {
      let view = routables
        .expand(senders[0].id)
        .expand(senders[1].id)
        .view()

      expect(view.senders[0].state).toContain('contracted')
      expect(view.senders[1].state).toContain('expanded')
    })

    it('defaults expanded to contracted and unrouted with no data', () => {
      let expanded = routables.view().expanded

      expect(expanded.state).toContain('contracted')
      expect(expanded.state).toContain('unrouted')
      expect(expanded.id).not.toBeDefined()
      expect(expanded.label).not.toBeDefined()
      expect(expanded.description).not.toBeDefined()
      expect(expanded.format).not.toBeDefined()
    })

    it('sets expanded to the values of expanded sender', () => {
      let expanded = routables
        .expand(senders[0].id)
        .view()
        .expanded

      expect(expanded.state).toContain('expanded')
      expect(expanded.state).toContain('routed')
      expect(expanded.id).toBe(senders[0].id)
      expect(expanded.label).toBe(senders[0].label)
      expect(expanded.description).toBe(senders[0].description)
      expect(expanded.format).toBe(flows[0].format)
    })

    it('contracting contracts all expanded senders', () => {
      let view = routables
        .expand(senders[0].id)
        .contract()
        .view()

      expect(view.senders[0].state).toContain('contracted')
    })

    it('contracting defaults expanded to defaults', () => {
      let expanded = routables
        .expand(senders[0].id)
        .contract()
        .view()
        .expanded

      expect(expanded.state).toContain('contracted')
      expect(expanded.state).toContain('unrouted')

      expect(expanded.id).not.toBeDefined()
      expect(expanded.label).not.toBeDefined()
      expect(expanded.description).not.toBeDefined()
      expect(expanded.format).not.toBeDefined()
    })
  })

  it('the routes have sender id and receiver id and are routed if receiver is routed', () => {
    let routes = routables.view().routes

    routes.forEach((route, index) => {
      expect(route.sender).toBeDefined()
      expect(route.receiver).toBeDefined()
      expect(route.state).toBe('routed')
    })
    expect(routes.length).toBe(4)
  })

  describe('routing', () => {
    let data = {
      routed: {},
      unrouted: {}
    }
    beforeEach(() => {
      data.routed.receiver = {
        index: 1,
        id: receivers[1].id
      }
      data.unrouted.receiver = {
        index: 9,
        id: receivers[9].id
      }

      data.routed.sender = {
        index: 2,
        id: senders[2].id
      }
      data.unrouted.sender = {
        index: 9,
        id: senders[9].id
      }
    })

    let testCases = [{
      receiver: 'unrouted',
      sender: 'unrouted',
      unrouting: false
    }, {
      receiver: 'routed',
      sender: 'unrouted',
      unrouting: true
    }, {
      receiver: 'unrouted',
      sender: 'routed',
      unrouting: false
    }, {
      receiver: 'routed',
      sender: 'routed',
      unrouting: true
    }]

    testCases.forEach(test => {
      let unroutingTitle = ''
      if (test.unrouting) unroutingTitle = ', old sender is unrouted and old route becomes unrouting'
      it(`receiver: ${test.receiver}, sender: ${test.sender} => new route${unroutingTitle}`, () => {
        let receiver = data[test.receiver].receiver
        let sender = data[test.receiver].sender
        let view = routables
          .route(receiver.id, sender.id)
          .view()

        expect(view.receivers[receiver.index].state).toContain('routed')
        expect(view.senders[sender.index].state).toContain('routed')

        let routing = view.routes.filter(route => {
          return route.sender.id === sender.id &&
               route.receiver.id === receiver.id
        })[0]
        expect(routing.state).toBe('routing')

        if (test.unrouting) {
          expect(view.senders[receiver.index].state).toContain('unrouted')
          let unrouting = view.routes.filter(route => {
            return route.sender.id === view.senders[receiver.index].id &&
                 route.receiver.id === receiver.id
          })[0]
          expect(unrouting.state).toBe('unrouting')
        }
      })
    })

    it('same already routed route will change to routing', () => {
      let receiverId = receivers[0].id
      let senderId = senders[0].id
      let view = routables
        .route(receiverId, senderId)
        .view()

      let routing = view.routes.filter(route => {
        return route.sender.id === senders[0].id &&
             route.receiver.id === receivers[0].id
      })[0]
      expect(routing.state).toBe('routing')
    })
  })

  it('unrouting changes sender and receiver to unrouted and the route to unrouting', () => {
    let view = routables
      .unroute(receivers[0].id)
      .view()

    expect(view.receivers[0].state).toContain('unrouted')
    expect(view.senders[0].state).toContain('unrouted')

    let route = view.routes.filter(route => {
      return route.receiver.id === receivers[0].id
    })[0]

    expect(route.state).toBe('unrouting')
  })

  it('chain routing will leave the route in the final state', () => {
    let receiverId = receivers[0].id
    let senderId = senders[0].id
    let view = routables
      .route(receiverId, senderId)
      .unroute(receiverId)
      .route(receiverId, senderId)
      .view()

    let routing = view.routes.filter(route => {
      return route.sender.id === senders[0].id &&
           route.receiver.id === receivers[0].id
    })[0]
    expect(routing.state).toBe('routing')
  })

  describe('updating', () => {
    it('removing and then adding the same one', () => {})

    describe('receivers', () => {
      it('adds, pre: empty', () => {
        let unroutedReceiver = generate.receiver()
        unroutedReceiver.subscription.sender_id = null

        let routedReceiverButNotToAnything = generate.receiver()
        routedReceiverButNotToAnything.subscription.sender_id = 'missing sender'

        let routedReceiverButNotToExistingSender = generate.receiver()
        routedReceiverButNotToExistingSender.subscription.sender_id = senders[8].id

        let view = routables
          .route(receivers[9].id, senders[9].id)
          .unroute(receivers[2].id, senders[2].id)
          .update
          .receivers([{
            post: unroutedReceiver,
            pre: {}
          }, {
            post: routedReceiverButNotToAnything,
            pre: {}
          }, {
            post: routedReceiverButNotToExistingSender,
            pre: {}
          }])
          .view()

        expect(view.receivers.length).toBe(receivers.length + 3)
        expect(view.senders[8].state).toContain('routed')

        let routes = view.routes.filter(route => {
          return route.sender.id === senders[8].id && route.receiver.id === routedReceiverButNotToExistingSender.id
        })

        expect(routes.length).toBe(1)

        let route = view.routes.filter(route => {
          return route.receiver.id === receivers[9].id && route.sender.id === senders[9].id
        })[0]
        expect(route.state).toBe('routing')

        route = view.routes.filter(route => {
          return route.receiver.id === receivers[2].id && route.sender.id === senders[2].id
        })[0]
        expect(route.state).toBe('unrouting')
      })

      it('changes state to removed when post is empty, senders are updated correctly, routes with matching id are removed and any route in route/unrouting state is left alone', () => {
        let view = routables
          .route(receivers[9].id, senders[9].id)
          .unroute(receivers[2].id, senders[2].id)
          .update
          .receivers([{
            pre: receivers[0],
            post: {}
          }, {
            pre: receivers[1],
            post: {}
          }])
          .view()

        expect(view.receivers[0].state).toContain('removed')
        expect(view.receivers[1].state).toContain('removed')
        expect(view.senders[0].state).toContain('unrouted')
        expect(view.senders[0].state).not.toContain('routed')
        expect(view.senders[1].state).toContain('unrouted')
        expect(view.senders[1].state).not.toContain('routed')

        let routes = view.routes.filter(route => {
          return route.receiver.id === receivers[0].id || route.receiver.id === receivers[1].id
        })
        expect(routes.length).toBe(0)

        let route = view.routes.filter(route => {
          return route.receiver.id === receivers[9].id && route.sender.id === senders[9].id
        })[0]
        expect(route.state).toBe('routing')

        route = view.routes.filter(route => {
          return route.receiver.id === receivers[2].id && route.sender.id === senders[2].id
        })[0]
        expect(route.state).toBe('unrouting')
      })

      it('updates', () => {
        let updateReceiver = Object.assign({}, receivers[9])
        updateReceiver.label = 'updated label'

        let unroutedReceiver = Object.assign({}, receivers[0])
        unroutedReceiver.subscription = {sender_id: null}

        let newlyRoutedReceiver = Object.assign({}, receivers[8])
        newlyRoutedReceiver.subscription = {sender_id: senders[9].id}

        let replacedRoute = Object.assign({}, receivers[1])
        replacedRoute.subscription = {sender_id: senders[8].id}

        let view = routables
          .update
          .receivers([{
            pre: receivers[9],
            post: updateReceiver
          }, {
            pre: receivers[0],
            post: unroutedReceiver
          }, {
            pre: receivers[8],
            post: newlyRoutedReceiver
          }, {
            pre: receivers[1],
            post: replacedRoute
          }])
          .view()

        expect(view.receivers[9].label).toBe('updated label')

        let routes = view.routes.filter(route => {
          return route.receiver.id === receivers[0].id && route.sender.id === senders[0].id
        })
        expect(routes.length).toBe(0)

        routes = view.routes.filter(route => {
          return route.receiver.id === receivers[8].id && route.sender.id === senders[9].id
        })
        expect(routes.length).toBe(1)

        routes = view.routes.filter(route => {
          return route.receiver.id === receivers[1].id && route.sender.id === senders[1].id
        })
        expect(routes.length).toBe(0)

        routes = view.routes.filter(route => {
          return route.receiver.id === receivers[1].id && route.sender.id === senders[8].id
        })
        expect(routes.length).toBe(1)
      })
    })
  })

  // it('Does everything you need to but not the HTTP stuff', () => {
  //   let receiverId = ''
  //   let senderId = ''
  //   let sender = {}
  //   let grain = {}
  //   routables.update.receivers(grains)
  //   routables.update.senders(grains)
  //   routables.update.flows(grains)
  // })
})
