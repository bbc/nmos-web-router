import clone from 'clone'

export default ({data, receiver, sender, staged}) => {
  let route = data.routes.filter(route => {
    return receiver.id === route.receiver.id &&
          sender.id === route.sender.id
  })[0]
  if (route === undefined) {
    route = {
      state: (staged) ? 'staged-route' : 'routing',
      receiver: clone(receiver),
      sender: clone(sender)
    }
    data.routes.push(route)
  }
}
