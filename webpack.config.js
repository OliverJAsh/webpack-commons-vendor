const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: {
        main: path.join(__dirname, '/src/main.js'),
    },
    output: {
        path: path.join(__dirname, '/target'),
        filename: 'entry-chunk-main.js',
        chunkFilename: '[name].entry-chunk-main.js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            children: true,
            async: 'vendor',
            minChunks: module => {
                const isVendor = module.context
                    .split('/')
                    .some(dir => dir === 'vendor');
                return isVendor;
            },
        }),

        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ],
};
