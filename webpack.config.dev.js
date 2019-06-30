const webpack = require('webpack');
const prodConfig = require('./webpack.config.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');

prodConfig.plugins.push(
    new HtmlWebpackPlugin({
        template: './src/index.html',
        hot: true
    }));

prodConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

prodConfig.devServer = {
    contentBase: __dirname + '/build',
    historyApiFallback : {
        index : 'index.html'
    }
};

module.exports = prodConfig;