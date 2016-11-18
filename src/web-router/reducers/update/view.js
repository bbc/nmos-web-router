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
  receiver = fuzzymatch(view, receiver, changeState)
  return receiver
}

export default (data, view, action) => {
  if (action.name === 'flows') return view

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
    }

    return routable
  })

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

  view[action.name].sort(window.nmos.defaultSort)

  return view
}
