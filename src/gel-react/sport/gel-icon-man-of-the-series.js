var react = require('react')
exports.default = function () {
  return react.createElement(
    'svg',
    { className: 'gel-icon gel-icon-man-of-the-series', xmlns: 'http://www.w3.org/2000/svg', width: '32', height: '31.9', viewBox: '0 0 32 31.9' },
    react.createElement(
      'g',
      { fill: '#4E7A22' },
      react.createElement('path', { d: 'M0 27.9h32v4H0zM0 20h32v4H0zM0 12h32v4H0zM0 4h32v4H0z' })
    ),
    react.createElement(
      'g',
      { fill: '#6C9148' },
      react.createElement('path', { d: 'M0 23.9h32v4H0zM0 16h32v4H0zM0 8h32v4H0zM0 0h32v4H0z' })
    ),
    react.createElement('path', { fill: '#FFF', d: 'M27.8 10.9L29 9.7l-.8-.5-.4.1-.3-.1-.4-.6-.3.1-.4 1.7z' }),
    react.createElement(
      'g',
      { fill: '#FFF' },
      react.createElement('path', { d: 'M3.9 8.1L2.6 5l.3-.5 1.5 1.6h.4l.3-1 .4.6v1.8zM9.6 31.9l-.7-5.6L7 20.5 4.9 14l-.6-4.6 1.6-.6 4 10.2 3.2 1.9 3.1.4 5.2-4.2 4.6-6 1.3.5-3.6 7.3-4.6 5.2-.1 2.5-.6 5.3z' }),
      react.createElement('path', { d: 'M13.7 18.6c1 .2 2 0 2.8-.5l-1.1-6.3h-.1c-1.9-.4-3.8.7-4.2 2.6-.5 1.8.7 3.7 2.6 4.2z' })
    )
  );
};