const path = require('path');

module.exports = {
  entry: './src/background/index.js',
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'build'),
  },
};
