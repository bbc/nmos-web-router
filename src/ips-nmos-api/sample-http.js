let NMOS = require('./src')

let url = 'http://localhost:6589'

let nmos = NMOS({
  get: url
})

nmos.subscription.receivers.subscribe(data => {
  // console.log('first', data)
})

setTimeout(function () {
  let senderId = '442b2e2b-8286-4ed4-906d-e5eb34a0ea0d'
  let receiverId = 'd1ea51b2-556e-42e6-8d21-2825f621d6fd'
  nmos.senders(senderId).then(sender => {
    nmos.route(receiverId, sender)
      .then(data => { console.log(data) })
      .catch(error => { console.log(error) })
  })
}, 1000)
