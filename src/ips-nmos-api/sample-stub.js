let NMOS = require('./src')

let nmos = NMOS({
  get: 'string:url',
  put: 'string:url',
  stub: true
})

let receiversCallback = (data) => { console.log('receivers', data) }
let receiversToken = nmos.subscription.receivers.subscribe(receiversCallback)

let sendersCallback = (data) => { console.log('senders', data) }
let sendersToken = nmos.subscription.senders.subscribe(sendersCallback)

let nodesCallback = (data) => { console.log('nodes', data) }
let nodesToken = nmos.subscription.nodes.subscribe(nodesCallback)

let flowsCallback = (data) => { console.log('flows', data) }
let flowsToken = nmos.subscription.flows.subscribe(flowsCallback)

let sourcesCallback = (data) => { console.log('sources', data) }
let sourceToken = nmos.subscription.sources.subscribe(sourcesCallback)

let devicesCallback = (data) => { console.log('devices', data) }
let devicesToken = nmos.subscription.devices.subscribe(devicesCallback)

nmos.stub.simulation.start(500)

setTimeout(function () {
  nmos.subscription.receivers.unsubscribe(receiversToken)
  nmos.subscription.senders.unsubscribe(sendersToken)
  nmos.subscription.nodes.unsubscribe(nodesToken)
  nmos.subscription.flows.unsubscribe(flowsToken)
  nmos.subscription.sources.unsubscribe(sourceToken)
  nmos.subscription.devices.unsubscribe(devicesToken)
}, 3 * 1000)

setTimeout(function () {
  nmos.stub.simulation.stop()
  console.log('stopped')
}, 4 * 1000)

setTimeout(function () {
  console.log('borred now')
  process.exit(0)
}, 5 * 1000)
