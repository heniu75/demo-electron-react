module.exports = {
  devtool: 'source-map',
  entry: ['./src/client/index.js'],
  output: {
    path: `${__dirname}/static`,
    filename: 'main.js',
    publicPath: '/static/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
    ]
  }
}
