var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-reading-and-writing', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M8 0h18v9H8zM30 0h-2v9h2c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM4 2L0 4.5 4 7zM4 17h9v2H4z' }),
    react.createElement('path', { d: 'M16 14l-2-2H0v20h14l2-2 2 2h14V12H18l-2 2zm-1 16H2V14h13v16zm15 0H17V14h13v16z' }),
    react.createElement('path', { d: 'M4 21h9v2H4zM4 25h9v2H4zM19 17h9v2h-9zM19 21h9v2h-9zM19 25h9v2h-9z' })
  )
}
