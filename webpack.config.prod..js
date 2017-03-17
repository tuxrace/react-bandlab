module.exports = {
  entry:{
    app: './index.js',
    vendor: ['react','react-dom','redux','react-redux']
  },
  output:{
    filename: [name].build.js
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },    
  plugins:[                
    new webpack.optimize.UglifyJsPlugin()
  ],
  devtool: '#source-map'
}