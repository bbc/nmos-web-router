var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-chats', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M0 0v32l8-8h24V0H0zm4 10h18v4H4v-4zm24 10H4v-4h24v4zm0-12H4V4h24v4z' })
  )
}
