// const path = require('path')

// const resolve = dir => {
//     return path.join(__dirname, dir)
// }
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    lintOnSave: true,
    // publicPath: '/',
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new BundleAnalyzerPlugin()
        ]
    }
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('@', resolve('src'))
    // }
}
