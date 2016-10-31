var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-microphone', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M18 24h-4v5H9v3h14v-3h-5zM24 12v3.8L21.4 21H10.6L8 15.8V12H6v4.2L9.4 23h13.2l3.4-6.8V12zM22 6l-3-6h-6l-3 6v6h12z' }),
    react.createElement('path', { d: 'M20 19l2-4v-1H10v1l2 4z' })
  )
}
