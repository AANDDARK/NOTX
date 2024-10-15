module.exports = {
  resolve: {
    extensions: ['.js', '.ts'], 
    fallback: {
      buffer: require.resolve('buffer/'),  
      os: false,                            
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      fs: false
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loader: 'builtin:swc-loader',
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
            },
          },
        },
        type: 'javascript/auto',
      },
    ],
  },
};
