const path = require('path');
var webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: './main.ts',
    },
    context: path.resolve(__dirname, 'src'),
    devtool: 'inline-source-map',
    module: {
        rules: [
            //{
            //    test: /\.ts?$/,
            //    use: 'ts-loader',
            //    exclude: /node_modules/,
            //},
            {
                test: /\.(js|jsx|tsx|ts)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new CopyPlugin([
            { from: 'index.html', to: 'index.html' },
            { from: '../dist/main.bundle.js', to: '../../Cockpit/Areas/Emr/Scripts/afhandelen-formulier-client.js' },
        ]),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8181,
        open: true
    }
};