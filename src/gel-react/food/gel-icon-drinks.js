var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-drinks', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M9.5 7l10 .001V14h-10V7zm-2-2v25.586L8.914 32h11.172l1.414-1.414V5h-14z' }),
    react.createElement('path', { d: 'M14.583 15.333l-1.93-.519L16.968 0H24.5v2h-6z' })
  )
}
