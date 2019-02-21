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

process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

// Load environment variables from .env file. Suppress warnings using silent
// if this file is missing. dotenv will never modify any environment variables
// that have already been set.
// https://github.com/motdotla/dotenv
require('dotenv').config({silent: true})

const jest = require('jest')
const argv = process.argv.slice(2)

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch')
}

// A temporary hack to clear terminal correctly.
// You can remove this after updating to Jest 18 when it's out.
// https://github.com/facebook/jest/pull/2230
var realWrite = process.stdout.write
var CLEAR = process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H'
process.stdout.write = function (chunk, encoding, callback) {
  if (chunk === '\x1B[2J\x1B[H') {
    chunk = CLEAR
  }
  return realWrite.call(this, chunk, encoding, callback)
}

jest.run(argv)
