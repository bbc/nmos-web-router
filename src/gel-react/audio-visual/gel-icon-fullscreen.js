var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-fullscreen', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M22 12v10H10V10h12m2-2H8v16h16V8zM21 0h11v11zM11 0H0v11zM21 32h11V21zM11 32H0V21z' })
  );
};