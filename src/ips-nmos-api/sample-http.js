let NMOS = require('./src')

let url = 'http://localhost:6589'

let nmos = NMOS({
  url
})

let options = {}

let sub = nmos.subscription.receivers(options)

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

sub.connect()
sub.connect()

setTimeout(() => {
  sub.disconnect()
}, 1000)
