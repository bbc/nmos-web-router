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

function style () {
  const stylelint = require('stylelint')
  return stylelint
  .lint({
    files: '**/*.css'
  })
  .then(result => {
    let errored = result.results
      .filter(res => {
        return res.errored
      })
    if (errored.length > 0) {
      errored.forEach(res => {
        console.log(res.source, res.warnings)
      })
    } else console.log('STYLE LINT FREE')
    return errored.length === 0
  })
  .catch(err => {
    console.log(err)
  })
}

function js () {
  try {
    const CLIEngine = require('eslint').CLIEngine
    let eslint = new CLIEngine({
      configFile: './.eslintrc.json'
    })
    let srcResults = eslint.executeOnFiles([
      'src',
      '__tests__',
      'config',
      'scripts'
    ]).results

    let filtered = srcResults
      .filter(function (result) {
        return result.messages.length !== 0
      })

    filtered.forEach(function (result) {
      console.log(result.filePath)
      result.messages.forEach(function (message) {
        let type = message.severity === 2 ? 'error' : 'warn'
        console.log(type, ':', message.line, ':', message.message)
      })
    })

    if (filtered.length === 0) console.log('JS LINT FREE')
    return filtered.length === 0
  } catch (e) {
    console.log(e)
  }
}

style()
  .then(stylePass => {
    let jsPass = js()
    let exit = 0
    if (!stylePass && !jsPass) exit = 1
    else if (!stylePass) exit = 2
    else if (!jsPass) exit = 3
    process.exit(exit)
  })
