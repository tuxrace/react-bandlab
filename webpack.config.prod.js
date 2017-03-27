
module.exports = {
  entry: {
    app: './src/index.js',
    vendor: ['react', 'react-dom', 'redux', 'react-redux']
  },
  output: {
    filename: './dist/[name].build.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#source-map'
}
