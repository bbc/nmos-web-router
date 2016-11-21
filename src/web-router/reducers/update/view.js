import fuzzysearch from 'fuzzysearch'
import ChangeState from '../change-state'

function isSenderRouted (sender, receivers) {
  return receivers.filter(receiver => {
    return receiver.subscription.sender_id === sender.id
  }).length > 0
}

function fuzzymatch (view, routable, changeState) {
  let fuzzymatch = fuzzysearch(view.choose.term.toLowerCase(), routable.label.toLowerCase()) || fuzzysearch(view.choose.term.toLowerCase(), routable.id.toLowerCase())
  if (fuzzymatch) changeState.fuzzymatch()
  else changeState.fuzzymissmatch()
  return routable
}

function mapSender (sender, data, view) {
  sender = Object.assign({}, sender)
  let changeState = ChangeState(sender)
  changeState.check().contract().selectable()
  if (isSenderRouted(sender, data.receivers)) changeState.route()
  else changeState.unroute()
  sender = fuzzymatch(view, sender, changeState)
  return sender
}

function mapReceiver (receiver, view, senders) {
  receiver = Object.assign({}, receiver)
  let changeState = ChangeState(receiver)
  changeState.check().contract().notSelectable()
  if (receiver.subscription.sender_id !== null) {
    let sender = senders.filter(sender => {
      return sender.id === receiver.subscription.sender_id
    })[0]
    receiver.subscription.routed = sender
    changeState.route()
  } else changeState.unroute()
  receiver.subscription.routing = receiver.subscription.routing || []
  receiver.subscription.unrouting = receiver.subscription.unrouting || []
  receiver = fuzzymatch(view, receiver, changeState)
  return receiver
}

function updateSenderRoutes (sender, data) {
  sender = Object.assign({}, sender)
  let changeState = ChangeState(sender)
  if (isSenderRouted(sender, data.receivers)) changeState.route()
  else changeState.unroute()
  return sender
}

export default (data, view, action) => {
  if (action.name === 'flows') return view

  data[action.name].forEach(routable => {
    let matched = view[action.name].filter(r => {
      return r.id === routable.id
    })[0]

    if (matched === undefined && action.name === 'receivers') {
      view[action.name].push(mapReceiver(routable, view, view.senders))
    } else if (matched === undefined && action.name === 'senders') {
      view[action.name].push(mapSender(routable, data, view))
    }
  })

  view[action.name] = view[action.name].map(routable => {
    routable = Object.assign({}, routable)
    let changeState = ChangeState(routable)

    let matched = data[action.name].filter(r => {
      return r.id === routable.id
    })[0]

    if (matched === undefined) changeState.remove()
    else {
      changeState.unremove()

      Object.keys(matched)
        .filter(key => {
          return key !== 'subscription'
        })
        .forEach(key => {
          routable[key] = matched[key]
        })

      if (action.name === 'receivers') {
        let mathcedRouted = matched.subscription.sender_id !== null
        let routableRouted = routable.subscription.hasOwnProperty('routed')
        let routableHasUnrouting = routable.subscription.unrouting.length > 0
        let routableHasRouting = routable.subscription.routing.length > 0

        if (routableHasRouting && mathcedRouted) {
          let sender = view.senders.filter(sender => {
            return sender.id === matched.subscription.sender_id
          })[0]
          routable.subscription.routed = sender
          let routingIndex = -1
          routable.subscription.routing.forEach((sender, index) => {
            if (sender.id === matched.subscription.sender_id) routingIndex = index
          })
          if (routingIndex !== -1) routable.subscription.routing.splice(routingIndex, 1)
          changeState.route()
        } else if (routableHasUnrouting && !mathcedRouted) {
          if (!routableRouted) routable.subscription.unrouting = []
          else {
            let unroutingIndex = -1
            routable.subscription.unrouting.forEach((sender, index) => {
              if (routable.subscription.routed.id === sender.id) unroutingIndex = index
            })
            if (unroutingIndex !== -1) routable.subscription.unrouting.splice(unroutingIndex, 1)
          }
          delete routable.subscription.routed
          changeState.unroute()
        }
      }
    }

    return routable
  })

  view.senders = view.senders.map(sender => {
    return updateSenderRoutes(sender, data)
  })

  view[action.name].sort(window.nmos.defaultSort)

  return view
}
