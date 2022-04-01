const Dotenv = require('dotenv-webpack');

module.exports = {
  test: /\.(png|svg|jpg|gif|pdf)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  ],
  plugins: [new Dotenv()],
};
