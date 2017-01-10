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
