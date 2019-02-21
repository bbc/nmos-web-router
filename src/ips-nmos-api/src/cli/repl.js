/**
 * Copyright 2019 British Broadcasting Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
