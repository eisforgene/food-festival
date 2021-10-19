const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: './assets/js/script.js', // provides relative path for client's code
    output: { // take entry point provided, bundle the code, and output the bundled code to a specified folder
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static"
        }),
    ],
    mode: 'development' //provide the mode in which we want webpack to run (default is production mode)
};