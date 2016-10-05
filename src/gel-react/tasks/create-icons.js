const fs = require('fs-extra')
const path = require('path')
const changeCase = require('change-case')
const babel = require('babel-core')

const ICONOGRAPHY_DIR = path.resolve(__dirname, '../gel-iconography-assets/dist')
const SRC_DIR = path.resolve(__dirname, '..')
let componentNames = []
let gelIconsJs = ''

function transform (code) {
  let presets = ['es2015', 'react']
  let transformed = babel.transform(code, { filename: 'repl', presets }).code
  return 'var react = require(\'react\')\n' + transformed
      .replace(/['|"]use strict['|"];/g, '')
      .replace("Object.defineProperty(exports, \"__esModule\", {", '')
      .replace("value: true", '')
      .replace("});", '')
      .replace('var _react = require("react");', '')
      .replace("var _react2 = _interopRequireDefault(_react);", '')
      .replace("function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }", '')
      .replace(/_react2.default/g, 'react')
      .replace(/"/g, "'")
      .trim()
}

function render(svg, name) {
  svg = svg
    .replace(/<style>[\S\s]*<\/style>/g, '')
    .replace('<svg', `<svg className="gel-icon ${name}"`)
  let code = `import React from 'react'; export default () => { return ${svg} }`
  return transform(code)
}

fs.readdirSync(ICONOGRAPHY_DIR).forEach(dir => {
  fs.readdirSync(path.join(ICONOGRAPHY_DIR, dir, 'individual'))
    .filter(fileName => {
      let name = fileName.replace('.svg', '')
      let componentName = changeCase.pascal(name).replace('GelIcon', '')
      if(!componentNames.includes(componentName)) {
        componentNames.push(componentName)
        return true
      }
      return false
    })
    .forEach(fileName => {
      let fullFileName = path.join(ICONOGRAPHY_DIR, dir, 'individual', fileName)
      let svg = fs.readFileSync(fullFileName).toString()
      let name = fileName.replace('.svg', '')

      let rendered = render(svg, name)

      let outputDir = path.join(SRC_DIR, dir)
      try { fs.mkdirSync(outputDir) } catch(e) { }
      let importFileName = path.join(dir, `${name}.js`)
      let componentName = changeCase.pascal(name).replace('GelIcon', '')
      if (componentName.startsWith('_')) componentName = componentName.replace('_', '$')
      gelIconsJs += `exports.${componentName} = require('./${importFileName}').default\n`
      fs.writeFileSync(path.join(outputDir, `${name}.js`), rendered)
    })
})

fs.writeFileSync(path.join(SRC_DIR, 'iconography.js'), gelIconsJs)
