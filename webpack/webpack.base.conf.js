/**
 * @file base webpack config
 * @author houyu(houyu01@baidu.com), yanghuabei(yanghuabei@baidu.com)
 */
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles_[name].css',
            allChunks: false
        })
    ],
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?modules&localIdentName=[local]'
                })
            },
            {
                test: /\.(png|jpg|ttf|woff|eot|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: false
                    }
                }
            }
        ]
    }
};
