"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var plugins_1 = require("@fishx/plugins");
var config = {
    title: 'fishx',
    plugins: [
        new plugins_1.FdxPlugin(),
        new plugins_1.LessPlugin({
            modifyVars: {
            //'@primary-color': '#40dc7e',
            // '@link-color': '#1DA57A',
            // '@border-radius-base': '10px',
            },
            options: {
                modules: true,
            },
            localIdentName: '[name]-[local]--[hash:base64:5]',
            javascriptEnabled: true,
        }),
        new plugins_1.RouterPlugin()
    ]
};
exports.default = config;
