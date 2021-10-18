const path = require('path');
const webpack = require('webpack');

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
    ],
    mode: 'development' //provide the mode in which we want webpack to run (default is production mode)
};