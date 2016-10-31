var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-tram-and-metro', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { fill: 'none', d: 'M16 7l2-5h-4l2 5zM7 25l4 1v-2H7zM7 10h2v9H7zM23 10h2v9h-2zM21 26l4-1v-1h-4z' }),
    react.createElement('path', { d: 'M25 7h-7l2-5h1l1 1h3l-3-3H10L7 3h3l1-1h1l2 5H7L5 9v18l2 2v1h2v2h2v-2h10v2h2v-2h2v-1l2-2V9l-2-2zm-7-5l-2 5-2-5h4zM7 10h2v9H7v-9zm4 16l-4-1v-1h4v2zm0-16h10v12H11V10zm14 15l-4 1v-2h4v1zm0-6h-2v-9h2v9z' })
  )
}
