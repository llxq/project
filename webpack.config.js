const path = require('path');

const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: path.join(__dirname, '/src/main.js'),
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'),
            filename: 'index.html'
        })
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: 'url-loader?limit=100&name=[hash: 8]-[name].[exit]'
                // use: 'url-loader?limit=100&name=[hash: 8]-[宝贝].[exit]'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2)$/,
                // 处理字体文件的 loader
                use: 'url-loader'
            },
            {
                test: /\.js$/,
                // 处理字体文件的 loader
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                // 处理 .vue文件的 loader
                use: 'vue-loader'
            },
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    }
}