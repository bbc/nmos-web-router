import clone from 'clone'

export default ({data, receiver, sender, staged}) => {
  let route = data.routes.filter(route => {
    return receiver.id === route.receiver.id &&
          sender.id === route.sender.id
  })[0]
  if (route === undefined) {
    route = {
      sender: clone(sender),
      receiver: clone(receiver)
    }
    data.routes.push(route)
  }
  if (staged) {
    route.state = 'staged-route'
  } else {
    route.state = 'routing'
  }
}
