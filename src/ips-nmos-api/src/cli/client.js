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
