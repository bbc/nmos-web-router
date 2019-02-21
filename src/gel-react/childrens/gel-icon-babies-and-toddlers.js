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

var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-babies-and-toddlers', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M26.8 17.9L13.4 4.5c-.8-.8-1.8-1.2-2.8-1.2-.9 0-1.8.3-2.6 1L.5 11.7v2.8l8.9-8.8c.3-.2.7-.4 1.2-.4s1 .2 1.4.6l.7.7L1.1 18.2c-.8.8-.8 2 0 2.8l9.2 9.2c.4.4.9.6 1.4.6.5 0 1-.2 1.4-.6l11.6-11.6.7.7c.8.8.8 2 0 2.8l-8.8 8.6h2.9l7.3-7.2.1-.1c1.5-1.4 1.5-3.9-.1-5.5zM11.7 28.8l-9.2-9.2 1.8-1.8h18.4l-11 11zM28.5 9.8l3-5-2-2-5 3-4-4c-.8-.8-2.2-.8-3 0l-2 2 12 12 2-2 .1-.1c.8-.8.7-2.2-.1-3l-1-.9z' })
  )
}
