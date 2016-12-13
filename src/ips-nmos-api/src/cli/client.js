const net = require('net')
const chalk = require('chalk')

module.exports = (replPort) => {
  let socket = net.connect(replPort)

  process.stdin.pipe(socket)
  socket.pipe(process.stdout)

  socket.on('connect', function () {
    process.stdin.resume()
    process.stdin.setRawMode(true)
  })

  socket.on('close', function done () {
    console.log(chalk.red.bold('\nDisconnected from ips-nmos-api'))
    process.stdin.setRawMode(false)
    process.stdin.pause()
    socket.removeListener('close', done)
    process.exit(0)
  })

  process.stdin.on('end', function () {
    console.log(chalk.red.bold('\nDisconnected from ips-nmos-api'))
    socket.destroy()
    process.exit(0)
  })

  process.stdin.on('data', function (b) {
    if (b.length === 1 && b[0] === 4) {
      process.stdin.emit('end')
    }
  })
}
