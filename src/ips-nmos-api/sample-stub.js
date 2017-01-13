let NMOS = require('./src')

let nmos = NMOS({
  get: 'string:url',
  put: 'string:url',
  stub: true
})

let receiversUpdate = (data) => { console.log('receivers', data) }
let receiversSubscription = nmos.subscription.receivers()
receiversSubscription.connect()
let receiversToken = receiversSubscription.subscribe({
  update: receiversUpdate
})

nmos.stub.simulation.start(500)

setTimeout(function () {
  receiversSubscription.unsubscribe(receiversToken)
}, 3 * 1000)

setTimeout(function () {
  nmos.stub.simulation.stop()
  console.log('stopped')
}, 4 * 1000)

setTimeout(function () {
  console.log('borred now')
  process.exit(0)
}, 5 * 1000)
