var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-switch-controlled', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('ellipse', { fill: '#E92224', cx: '16', cy: '24', rx: '12', ry: '6' }),
    react.createElement('path', { d: 'M21 6l-3 3V2h-4v7l-3-3-2.5 2.5L16 16l7.5-7.5z' })
  )
}
