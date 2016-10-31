var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-webcam', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M7.5 27l-3 5h23l-3-5z' }),
    react.createElement('circle', { cx: '16', cy: '12.5', r: '3.5' }),
    react.createElement('path', { d: 'M16 25c6.9 0 12.5-5.6 12.5-12.5S22.9 0 16 0 3.5 5.6 3.5 12.5 9.1 25 16 25zm0-19c3.6 0 6.5 2.9 6.5 6.5S19.6 19 16 19s-6.5-2.9-6.5-6.5S12.4 6 16 6z' })
  )
}
