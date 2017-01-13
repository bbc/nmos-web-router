let NMOS = require('./src')

let url = 'http://localhost:6589'

let nmos = NMOS({
  url
})

nmos.subscriptions().then(data => {
  console.log(data)
})

let options = {}
let sub = nmos.subscription.receivers(options)
sub.connect()
  .then(data => {
    console.log(data.data)
  })
  .catch(error => {
    console.log(error)
  })

sub.subscribe({
  update (data) {
    console.log(data)
  },
  open () {
    console.log('opened')
  },
  close () {
    console.log('closed')
  },
  error (error) {
    console.log(error)
  }
})

// setTimeout(() => {
//   sub.disconnect()
// }, 1000)
