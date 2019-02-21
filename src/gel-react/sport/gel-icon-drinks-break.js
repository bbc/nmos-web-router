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
    { className: 'gel-icon gel-icon-drinks-break', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { opacity: '.2', fill: '#0087FF', d: 'M4 9.4L5.6 7h2.7L10 9.4v.6H4zM10 27H4v-8l.8-2h-.7c-.1 0-.1-.1-.1-.1V16h6v.9c0 .1 0 .1-.1.1h-.8l.9 1.9V27c.1 0 0 0 0 0z' }),
    react.createElement('path', { d: 'M11 16.9V9.1L8.8 6H5L3 9.1v7.8c0 .4.2.7.4.9l-.4.8V27c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-8.1l-.4-1.1c.2-.2.4-.6.4-.9zM4 9.4L5.6 7h2.7L10 9.4v.6H4v-.6zM10 27H4v-8l.8-2h-.7c-.1 0-.1-.1-.1-.1V16h6v.9c0 .1 0 .1-.1.1h-.8l.9 1.9V27c.1 0 0 0 0 0z' }),
    react.createElement('path', { opacity: '.2', fill: '#0087FF', d: 'M14.9 18l.6 9h7l.6-9z' }),
    react.createElement('path', { d: 'M23.4 28h-8.8l-1-14h1l.9 13h7l.9-13h1z' }),
    react.createElement('path', { d: 'M16.5 26.2l-.9-.5 7.1-14.5 6.1-1.1.2 1-5.7 1zM9 5.4c0 .3-.3.6-.6.6H5.6c-.3 0-.6-.3-.6-.6v-.8c0-.3.3-.6.6-.6h2.7c.4 0 .7.3.7.6v.8z' })
  )
}
