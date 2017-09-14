// console.log( __dirname ); //D:\ghostWu\bak\webpack\demo2
//  module.exports = {
//      entry : ['./src/js/main.js', './src/js/calc.js'],
//      output : {
//          //__dirname，就是当前webpack.config.js文件所在的绝对路径
//          path : __dirname + '/dist', //输出路径，要用绝对路径
//          filename : 'index.bundle.js' //打包之后输出的文件名
//      }
//  };



// console.log( __dirname ); //D:\ghostWu\bak\webpack\demo2
// module.exports = {
//     entry : {
//         main : './src/js/main.js',
//         calc : './src/js/calc.js'
//     },
//     output : {
//         //__dirname，就是当前webpack.config.js文件所在的绝对路径
//         path : __dirname + '/dist', //输出路径，要用绝对路径
//         filename : '[name].bundle.js' //打包之后输出的文件名
//     }
// };
// 
// 
// 
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry : {
        main : './src/js/main.js',
        calc : './src/js/calc.js'
    },
    output : {
        //__dirname，就是当前webpack.config.js文件所在的绝对路径
        path : __dirname + '/dist', //输出路径，要用绝对路径
        filename : '[name]-[hash].bundle.js' //打包之后输出的文件名
    },
    plugins: [new HtmlWebpackPlugin()]
};