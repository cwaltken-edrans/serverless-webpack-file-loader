const slsw = require('serverless-webpack');
console.log(slsw.lib.entries);

module.exports = {
  entry:  slsw.lib.entries.handler,
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: __dirname,
      exclude: /node_modules/,
    },
    {
      test: /\.yaml$/,
      loader: "file-loader"
    }]
  },
};
