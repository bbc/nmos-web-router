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
const NMOS = require('../src')
const fs = require('fs')
const path = require('path')

let url = process.argv.filter(arg => {
  return arg.includes('--url=')
})[0] || '--url='
url = url.replace('--url=', '')

if (url === '') {
  console.error(chalk.red('You need to specify the url with'), chalk.yellow('--url=...'))
  process.exit(1)
}

let nmos = NMOS({
  url
})

const types = [
  'devices',
  'flows',
  'receivers',
  'senders',
  'sources'
]

const stubLocation = path.resolve(__dirname, '../src/stub/data/')

types.forEach(type => {
  nmos[type]()
    .then(data => {
      fs.writeFileSync(path.join(stubLocation, `${type}.json`), JSON.stringify(data, null, 4))
    })
    .catch(err => {
      console.error(err)
    })
})

nmos.nodes()
  .then(nodes => {
    nodes = nodes.map(node => {
      node.href = 'http://localhost:6589/'
      return node
    })
    fs.writeFileSync(path.join(stubLocation, 'nodes.json'), JSON.stringify(nodes, null, 4))
  })
  .catch(err => {
    console.error(err)
  })
