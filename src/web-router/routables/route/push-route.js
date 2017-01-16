import clone from 'clone'

export default ({data, receiver, sender}) => {
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
  route.state = 'routing'
}
