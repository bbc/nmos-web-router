var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-podcast', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '16', cy: '14', r: '4' }),
    react.createElement('path', { d: 'M16 6c2.2 0 4.2.9 5.7 2.3l1.4-1.4C21.3 5.1 18.8 4 16 4s-5.3 1.1-7.1 2.9l1.4 1.4C11.8 6.9 13.8 6 16 6z' }),
    react.createElement('path', { d: 'M16 2c3.3 0 6.3 1.3 8.5 3.5l1.4-1.4C23.4 1.6 19.9 0 16 0c-3.9 0-7.4 1.6-9.9 4.1l1.4 1.4C9.7 3.3 12.7 2 16 2zM19 32h-6l-3-13h12z' })
  )
}
