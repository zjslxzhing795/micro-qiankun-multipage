const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const baseConfig = require("./pack.base");
const { name } = require("../package");

const buildConfig = merge(baseConfig, {
    mode: "development",
    devtool: false,
    output: {
        path: path.join(__dirname, "../build"),
        filename: "[name].[chunkhash:8].js",
        library: `${name}-[name]`,
        libraryTarget: "umd",
        globalObject: "window",
        // publicPath: '/'
    },
    // externals: {
    //     react: "React",
    //     "react-dom": "ReactDOM",
    // },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "../public"),
                to: path.resolve(__dirname, "../build"),
                ignore: [".*"],
            },
        ]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    ecma: 6,
                    compress: true,
                    output: {
                        comments: false,
                        beautify: false,
                    },
                },
            }),
            new OptimizeCSSAssetsPlugin({}),
        ],
    },
});
module.exports = buildConfig;
