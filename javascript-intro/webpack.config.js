const path = require('path');

module.exports = {
    // entry: './src/index.js',
    entry: './src/bases/10-fetch.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};