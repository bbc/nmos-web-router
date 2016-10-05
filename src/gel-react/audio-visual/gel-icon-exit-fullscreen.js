var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-exit-fullscreen', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M28 12h-8V4zM4 12h8V4zM28 20h-8v8zM4 20h8v8zM1 0h30v2H1zM1 30h30v2H1z' }),
    react.createElement('path', { d: 'M0 0h2v32H0zM30 0h2v32h-2z' })
  );
};