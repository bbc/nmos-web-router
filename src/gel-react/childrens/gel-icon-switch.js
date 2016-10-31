var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-switch', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16 16l8.6-8.6-2.9-2.8L18.3 8V0h-4.6v8l-3.4-3.4-2.9 2.8L16 16z' }),
    react.createElement('ellipse', { cx: '16', cy: '25.1', rx: '13.7', ry: '6.9' })
  )
}
