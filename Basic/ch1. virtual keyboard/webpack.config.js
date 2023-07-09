
const path = require('path');
const TerserWebpackPlugIn = require("terser-webpack-plugin");
const HtmlWebpackPlugIn = require("html-webpack-plugin");
const MiniCssExtractPlugIn = require("mini-css-extract-plugin");
const CssMinimizerPlugIn = require("css-minimizer-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true
    },
    devtool: "source-map",
    mode: "development",
    devServer:{
        host:"localhost",
        port:8080,
        open:true,
        watchFiles: "index.html"
    },
    plugins:[
        new HtmlWebpackPlugIn({
            title: "keyboard",
            template: "./index.html",
            inject: "body",
            favicon: "./favicon.png"
        }),
        new MiniCssExtractPlugIn({
            filename:"style.css"
        })
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugIn.loader, "css-loader"]
            }
        ]
    },
    optimization:{
        minimizer:[
            new TerserWebpackPlugIn(),
            new CssMinimizerPlugIn()
        ]
    }
}