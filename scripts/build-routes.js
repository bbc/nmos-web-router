const fs = require('fs-extra')
const path = require('path')

const ROUTES = [
  'web-router'
]

ROUTES.forEach((route) => {
  fs.mkdirsSync(path.join(__dirname, `../build/${route}`))
  fs.copySync('build/index.html', path.join(__dirname, `../build/${route}/index.html`))
})
