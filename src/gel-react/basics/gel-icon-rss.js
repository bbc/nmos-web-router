var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-rss', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('circle', { cx: '5', cy: '27', r: '5' }),
    react.createElement('path', { d: 'M25 32h7C32 14.3 17.7 0 0 0v7c13.8 0 25 11.2 25 25z' }),
    react.createElement('path', { d: 'M15 32h7c0-12.1-9.9-22-22-22v7c8.3 0 15 6.7 15 15z' })
  )
}
