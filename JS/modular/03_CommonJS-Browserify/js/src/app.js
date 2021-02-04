/*
* 主文件，用于汇总各个模块
* 注意：引入模块时：
* 1.如果引入的是第三方模块，则直接写模块名。
* 2.如果引入的是自定义模块，必须写路径。
* */

//这边是自定义模块 写路径形式 前面的./不能省略
//require在node里面有 在浏览器里面没有 所以需要下载browserify
//browserify用于把commonjs的模块化语法 翻译成浏览器认识的语法
//运行 browserify js/src/app.js -o js/dist/bundle.js 通过browserify将app.js翻译成浏览器认识的bundle.js

let module1 = require('./module1')
let { data, test } = require('./module1')//引入的同时，进行解构赋值
let module2 = require('./module2')
let module3 = require('./module3')
let uniq = require('uniq')

//如何使用一个模块取决于：模块暴露的是什么。
console.log(module1.data);
module1.test()
module2.haha()
console.log(module3.peiqi);
console.log(uniq([1, 3, 2, 5, 4, 3, 6, 7, 11, 10, 9, 8]));
console.log(data)
test()
//console.log(require('./modules/module1').data)
//验证内置关系
/*
console.log(module.exports === exports)
console.log(module.exports)
console.log(exports)*/
