 var path = require('path');  
 var config = {
     entry: './main.js',

     output: {
         path : path.resolve(__dirname, './'),  
         filename: 'bundle.js'
     },
     
     devtool: 'source-map',

     devServer: {
         inline: true,
         port: 8080
     },

     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader',
             query: {
               presets: ['es2015', 'react', 'stage-0'],
               plugins: [
            ["import", { libraryName: "antd", style: 'css' }] // `style: true` 会加载 less 文件
               ]

            }
             
         },{
        test : /\.css$/,
        loader : 'style-loader!css-loader'
        // [path][name]_[local]_[hash:base64:5]也可以
      }]
     }

 };
 module.exports = config;