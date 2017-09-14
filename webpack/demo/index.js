var oCals = require('./cals.js');
require('style-loader!css-loader!./style.css');



function go(){
	alert("使用webpack");
}
go();

alert(oCals.add(10,20));
//网址 http://www.cnblogs.com/ghostwu/p/7499421.html 
//命令行 webpack index.js index.bundle.js