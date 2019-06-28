const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/index.js'
    ],
    target : 'web',
    output: {
        path       : __dirname + '/build',
        publicPath : '/',
        filename   : "bundle.js"
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hot: true
        }),
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: __dirname + '/build',
        historyApiFallback : {
            index : 'index.html'
        }
    },
    module : {
        rules : [
            { 
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test : /\.sass$/,
                use : [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test : /\.svg$|\.eot$|\.woff$|\.woff2$|\.ttf$|\.png$/,
                use : 'file-loader'
            }
        ]
    }
};