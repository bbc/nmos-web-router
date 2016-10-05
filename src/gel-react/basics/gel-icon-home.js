var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-home', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '31.9', viewBox: '0 0 32 31.9' },
    react.createElement('path', { d: 'M16 5.4l-12 12v14.5h9V22h6v9.9h9V17.4l-12-12z' }),
    react.createElement('path', { d: 'M28 12V4h-4v4l-6.6-6.6L16 0l-1.4 1.4L0 16v2.8l16-16 16 16V16z' })
  );
};