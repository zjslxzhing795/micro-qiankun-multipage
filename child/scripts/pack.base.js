const path = require("path");
// const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { name } = require("../package");

const env = process.env.NODE_ENV;
// const __DEV__ = env === 'development';
// const __PROD__ = env === 'production';

/**
 * webpack 配置
 * https://webpack.js.org/configuration/#options
 */
const baseConfig = {
    /**
     * 目标环境
     * https://webpack.js.org/configuration/target/#target
     */
    // target: "web",

    /**
     * 程序的入口
     * https://webpack.js.org/configuration/entry-context/#entry
     */
    entry: {
        main: path.join(__dirname, "../src/index.js"),
        about: path.join(__dirname, "../src/about.js"),
        RoomManage: path.join(__dirname, "../src/RoomManage.js"),
    },
    /**
     * 输出配置
     */
    output: {
        path: path.join(__dirname, "../build"),
        filename: "[name].js",
        library: `${name}-[name]`,
        libraryTarget: "umd",
        globalObject: "window",
    },

    resolve: {
        alias: {
            public: path.join(__dirname, "../public"),
            "@": path.join(__dirname, "../src"),
        },
    },

    /**
     * 模块
     * https://webpack.js.org/configuration/module/
     */
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: [path.join(__dirname, "../src")],
                use: ["babel-loader"],
            },
            {
                test: /\.(scss|css)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.(bmp|gif|jpg|jpeg|png|svg)$/,
                // exclude: /node_modules/,
                use: ["file-loader"],
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2|svg)$/,
                exclude: /node_modules/,
                use: ["file-loader"],
            },
            {
                test: /\.swf$/,
                loader: "file-loader",
                query: {
                    name: "static/media/[name].[ext]",
                },
            },
        ],
    },

    plugins: [
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         NODE_ENV: JSON.stringify(env)
        //     },
        //     __DEV__,
        //     __PROD__
        // }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html",
            env: env,
            chunks: ["main"],
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./about.html",
            env: env,
            chunks: ["about"],
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./RoomManage.html",
            env: env,
            chunks: ["RoomManage"],
        }),
    ],
};

module.exports = baseConfig;
