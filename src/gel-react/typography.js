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

require('./gel-typography.css')
var react = require('react')

function cleanClassName (className) {
  return className.split(' ').filter(function (str) {
    return str !== ''
  }).join(' ').trim()
}

function convertGel (gel) {
  if (!gel.includes('gel-')) return 'gel-' + gel
  return gel
}

function GelTypography (ref) {
  var bold = ''
  if (ref.bold) bold = '-bold'

  var noTouch = ''
  if (ref.noTouch) ref.noTouch = 'no-touch'

  var typography = convertGel(ref.typography)

  var className = ref.className
  className = className || ''
  className = noTouch + ' ' + className + ' ' + typography + bold

  var ref2 = Object.assign({}, ref)
  delete ref2.bold
  delete ref2.noTouch
  delete ref2.typography
  delete ref2.children
  ref2.className = cleanClassName(className)

  return react.createElement('span', ref2, ref.children)
}

function create (typography) {
  return function (ref) {
    return react.createElement(GelTypography, Object.assign({
      typography: typography
    }, ref))
  }
}

var styles = {
  Canon: 'canon',
  Trafalgar: 'trafalgar',
  DoublePica: 'double-pica',
  GreatPrimer: 'great-primer',
  Pica: 'pica',
  LongPrimer: 'long-primer',
  Brevier: 'brevier',
  Minion: 'minion',
  BodyCopy: 'body-copy'
}

Object.keys(styles).forEach(key => {
  exports[key] = create(styles[key])
})
