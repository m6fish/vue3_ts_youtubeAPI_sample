const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    lintOnSave: true,
    publicPath: './',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            // new BundleAnalyzerPlugin()
        ]
    }
}
