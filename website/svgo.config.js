const {prefix} = require('@fortawesome/free-brands-svg-icons');
const {info} = require('console');
const path = require('path');

module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeTitle: false,
          removeViewBox: false,
        },
      },
    },
    {
      name: 'prefixIds',
      params: {
        delim: '',
        prefix: (_, info) => path.parse * info.path.name,
      },
    },
  ],
};
