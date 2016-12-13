const chalk = require('chalk')
const repl = require('repl')
const net = require('net')

module.exports = (nmos, httpPort, wsPort, replPort, connected) => {
  const help = chalk.white.bold('\nRunning ips-nmos-api stub service\n') +
  chalk.white.bold('\nNMOS REPL\n') +
  chalk.white(`  Global variable ${chalk.yellow.bold('nmos')} is available\n`) +
  chalk.white(`  See ${chalk.yellow.bold('README.md')} for details on how to use nmos\n`) +
  chalk.white(`  Run ${chalk.yellow.bold('.help')} for this info\n`) +
  chalk.white(`  Run ${chalk.yellow.bold('.exit')} for quick exit (or hammer ${chalk.yellow.bold('Ctrl+C')})\n\n`) +
  chalk.white.bold('serving on: ') + chalk.blue.underline.bold(`http://localhost:${httpPort}\n`) +
  chalk.white.bold('listening on: ') + chalk.blue.underline.bold(`ws://localhost:${wsPort}\n`) +
  chalk.white.bold('repl running on: ') + chalk.blue.underline.bold(`ws://localhost:${replPort}\n`)

  net.createServer(function (socket) {
    socket.write(help)
    var r = repl.start({
      prompt: 'nmos > ',
      input: socket,
      output: socket,
      terminal: true,
      useGlobal: false
    })

    r.on('exit', function () {
      socket.end()
    })

    r.defineCommand('help', {
      action: function (name) {
        socket.write(help)
      }
    })

    r.context.socket = socket
    r.context.nmos = nmos
  }).listen(replPort)
}
