var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-shows-information', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M8 15.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5S18.1 9 14.5 9 8 11.9 8 15.5z' }),
    react.createElement('path', { d: 'M0 1v26h7l-1 4h17l-2-7H3V4h26v20h-6l1 3h8V1z' })
  )
}
