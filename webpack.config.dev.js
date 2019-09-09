const webpack = require('webpack');
const prodConfig = require('./webpack.config.prod');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { findIndex } = require('lodash');

const htmlPluginIndex = findIndex(prodConfig.plugins, (plugin) => plugin instanceof HtmlWebpackPlugin);
const plugin = new HtmlWebpackPlugin({
    template: './src/index.html',
    hot: true
});
if(htmlPluginIndex >= 0) {
    prodConfig.plugins[htmlPluginIndex] = plugin;
}
else {
    prodConfig.plugins.push(plugin);
}

prodConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
);

prodConfig.devServer = {
    contentBase: __dirname + '/build',
    historyApiFallback : {
        index : 'index.html'
    }
};

prodConfig.devtool = 'cheap-module-eval-source-map';

module.exports = prodConfig;