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
    { className: 'gel-icon gel-icon-judo', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M29 19l3-6-1-1-5 7v.4l4.5 4.9zM13 12h7l8.4-5L27 6l-8 3-1.8-.6z' }),
    react.createElement('path', { d: 'M8 14l5-4 6-5 5.4-3L23 1l-9 3-9 5-2 2v5l7 3 4 3v7l2 2h7l8-4-13-14h-2l8 12-2 1h-4l-2-5zM2.5 17h-.1c-.3 0-.6.1-.8.2-.9.4-1.6 1.3-1.6 2.3 0 .9.5 1.7 1.2 2.1L5 19.2c0-.2-.1-.4-.2-.6-.1-.3-.3-.5-.4-.7-.5-.6-1.1-.9-1.9-.9z' }),
    react.createElement('path', { d: 'M13 25.5v-.1c0-.5-.2-1-.5-1.4-.1-.2-.2-.3-.4-.4l-4 1.3c-.1.1-.1.4-.1.6 0 1.4 1.1 2.5 2.5 2.5.8 0 1.5-.4 2-1 .3-.4.5-.9.5-1.4v-.1z' })
  )
}
