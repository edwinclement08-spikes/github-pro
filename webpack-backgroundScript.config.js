const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/background/index.js',
  output: {
    filename: 'background.js',
    path: path.resolve(__dirname, 'build'),
  },
};
