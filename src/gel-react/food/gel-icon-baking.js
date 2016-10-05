var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-baking', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '32', viewBox: '0 0 32 32' },
    react.createElement('path', { d: 'M16.5 14h-13v12h13V14zM10 24a4 4 0 1 1 0-8 4 4 0 0 1 0 8z' }),
    react.createElement('path', { d: 'M10.5 20l-.25-3H9.5v3zM19.5 6c-.481 3.399-4.637 6-9.5 6C5.142 12 .988 9.394.5 6h19zM22.5 6h9v20h-9zM27.5 5l1-1V0h-3v4l1 1zM26.5 27l-1 1v4h3v-4l-1-1z' })
  );
};