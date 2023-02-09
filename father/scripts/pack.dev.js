const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');// 将dll文件追加到html中
const baseConfig = require('./pack.base');

/**
 * webpack配置
 * https://webpack.js.org/configuration/#options
 */
const devConfig = merge(baseConfig, {
    /**
     * 模式
     * webpack4中设置mode会自动配置DefinePlugin,是为了业务代码中获取NODE_ENV，要想webpack.config中获取请通过cross-env
     * https://webpack.js.org/concepts/mode/
     */
    mode: 'development',

    /**
     * 调试工具
     * https://webpack.js.org/configuration/devtool/
     */
    devtool: 'inline-source-map',

    /**
     * 开发服务配置
     * https://webpack.js.org/configuration/dev-server/
     */
    devServer: {
        host: 'localhost',
        port: '8088'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.join(__dirname, '../dll', 'vendor-manifest.json'))
        }),
        new AddAssetHtmlPlugin({
            filepath: require.resolve('../dll/vendor.dll.js'),
            includeSourcemap: false
        })
    ]
});
module.exports = devConfig;
