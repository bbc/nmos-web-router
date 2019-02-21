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

require('./gel-grid.css')

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

function convertLayout (layout) {
  if (!layout.includes('gel-layout--')) return 'gel-layout--' + layout
  return layout
}

function Wrap (ref) {
  let obj = Object.assign({}, ref)
  var className = ref.className
  className = className || ''

  var gels = ref.gels
  if (typeof gels === 'string') gels = [gels]
  gels = gels || []
  gels = gels.map(convertGel).join(' ')
  className += ' ' + gels

  delete obj.children
  obj.className = 'gel-wrap ' + className
  obj.className = cleanClassName(obj.className)

  return react.createElement('div', obj, ref.children)
}

function Layout (ref) {
  let obj = Object.assign({}, ref)

  var layouts = ref.layouts
  if (typeof layouts === 'string') layouts = [layouts]
  layouts = layouts || []
  layouts = layouts.map(convertLayout).join(' ')

  var className = ref.className
  className = className || ''
  className = 'gel-layout ' + className + ' ' + layouts

  var gels = ref.gels
  if (typeof gels === 'string') gels = [gels]
  gels = gels || []
  gels = gels.map(convertGel).join(' ')
  className += ' ' + gels

  delete obj.children
  delete obj.gels
  delete obj.layouts
  obj.className = cleanClassName(className)

  return react.createElement('div', obj, ref.children)
}

function LayoutItem (ref) {
  let obj = Object.assign({}, ref)

  var gels = ref.gels
  if (typeof gels === 'string') gels = [gels]
  gels = gels || []
  gels = gels.map(convertGel).join(' ')

  var className = ref.className
  className = className || ''
  className = 'gel-layout__item ' + className + ' ' + gels

  delete obj.children
  delete obj.gels
  obj.className = cleanClassName(className)

  return react.createElement('div', obj, ref.children)
}

exports.default = { Wrap: Wrap, Layout: Layout, LayoutItem: LayoutItem }
exports.Wrap = Wrap
exports.Layout = Layout
exports.LayoutItem = LayoutItem
