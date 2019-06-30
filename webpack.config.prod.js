const { VueLoaderPlugin } = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
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
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    module : {
        rules : [
            { 
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test : /\.css$/,
                use : [
                    'vue-style-loader',
                    'css-loader'
                ]
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