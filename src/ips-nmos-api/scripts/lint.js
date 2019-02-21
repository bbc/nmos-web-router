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

function js () {
  try {
    const CLIEngine = require('eslint').CLIEngine
    let eslint = new CLIEngine({
      configFile: './.eslintrc.json'
    })
    let srcResults = eslint.executeOnFiles([
      'src',
      '__tests__',
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

let exit = js() ? 0 : 1
process.exit(exit)
