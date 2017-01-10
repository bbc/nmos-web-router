let NMOS = require('./src')

let url = 'http://localhost:6589'

let nmos = NMOS({
  url
})

nmos.subscription.receivers.subscribe({
  updated (data) {
    console.log('updated')
  },
  errored (error) {
    console.error('socket error:', error)
  },
  opened () {
    console.log('open')
  },
  closed () {
    console.log('closed')
  },
  polling () {
    console.log('polling')
  }
})

let senderId, receiverId
nmos.receivers()
  .then(data => {
    receiverId = data.filter(receiver => {
      return receiver.subscription.sender_id === null
    })[0].id
    return nmos.senders()
  })
  .then(data => {
    senderId = data[0].id
    setTimeout(function () {
      nmos.senders(senderId).then(sender => {
        nmos.route(receiverId, sender)
          .then(data => { console.log(data) })
          .catch(error => {
            console.error('route error:', error)
          })
      })
      .catch(error => {
        console.log('sender error:', error)
      })
    }, 1000)
  })
  .catch(error => {
    console.log('receiver error:', error)
  })
