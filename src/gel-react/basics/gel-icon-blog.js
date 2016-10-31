var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-blog', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M7 18.6v6h6l.7-.6-6-6z' }),
    react.createElement('path', { d: 'M26-.4L9.3 16.4l6 6L26 11.6v18H2v-24h12v-2H0v28h28v-22l4-4z' })
  )
}
