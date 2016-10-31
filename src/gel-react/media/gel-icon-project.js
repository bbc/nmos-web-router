var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-project', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement(
      'g',
      { id: 'Layer_2' },
      react.createElement('path', { d: 'M5 7h11.7l3 3H23V4H11.9l-3-3H1v20h4z' }),
      react.createElement('path', { d: 'M8.5 30.6v-20h7l3 3h12v17z' })
    )
  )
}
