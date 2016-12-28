/**
 * Created by huhai on 2016/12/25.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports={
    entry:"./src/main.js",
    output:{
        path:"./dist",
        filename:"bundle.js"
    },
    devtool:"source-map",
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.jade$/,
                loader:"jade-loader?pretty"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:"HTML-WEBPACK-PLUGIN21",
            hash:true,
            template:__dirname+"/jade_template.jade"
        })
    ]
};