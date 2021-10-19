const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    entry: {
        app: "./assets/js/script.js", // provides relative path for client's code
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },    
    output: { // take entry point provided, bundle the code, and output the bundled code to a specified folder
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
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