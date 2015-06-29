module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js', //this is the default name, so you can skip it
    //at this directory our bundle file will be available
    //make sure port 8090 is used when launching webpack-dev-server
    publicPath: 'http://localhost:8090/assets'
  },
  module: {
    loaders: [
      {
        //tell webpack to use jsx-loader for all *.jsx files
        test: /\.js$/,
        loader: 'jsx-loader?harmony'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
