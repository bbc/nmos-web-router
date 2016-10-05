var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-document', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M21.3 3L27 8.7V29H5V3h16.3m.7-3H2v32h28V8l-8-8z' }),
    react.createElement('path', { d: 'M10 13h12v3H10zM10 17h12v3H10zM10 21h12v3H10z' })
  );
};