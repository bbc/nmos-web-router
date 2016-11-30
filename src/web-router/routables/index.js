function mapSenderFormat (senders, flows) {
  return senders.map(sender => {
    let flow = flows.filter(flow => {
      return flow.id === sender.flow_id
    })[0] || {format: 'no'}
    sender.format = flow.format
    return sender
  })
}

export default () => {
  let senders = []
  let receivers = []
  let flows = []
  let routes = []
  let devices = []
  let nodes = []

  let routables = {
    insert: {
      senders (data) {
        senders = data
        senders = mapSenderFormat(senders, flows)
      },
      receivers (data) { receivers = data },
      flows (data) {
        flows = data
        senders = mapSenderFormat(senders, flows)
      },
      devices (data) { devices = data },
      nodes (data) { nodes = data }
    },
    route (receiverId, sender) {},
    unroute () {},
    update: {
      senders (grain) {},
      receivers (grain) {},
      flows (grain) {},
      devices (grain) {},
      nodes (grain) {}
    },
    filter (term) {},
    check: {
      receiver () {},
      sender () {}
    },
    expand (senderId) {},
    view () {
      return {
        senders,
        receivers,
        routes
      }
    }
  }

  return routables
}
