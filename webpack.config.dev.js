const { VueLoaderPlugin } = require('vue-loader');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './src/index.js'
    ],
    target : 'web',
    output: {
        path       : __dirname + '/build',
        publicPath : './',
        filename   : "bundle.js"
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new VueLoaderPlugin()
    ]
    ,
    module : {
        rules : [
            { 
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    }
};