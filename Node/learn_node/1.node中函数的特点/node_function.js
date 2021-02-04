/**
 * 1. Node中任何一个模块(js文件)都被一个外层函数所包裹
 * function (exports, require, module, __filename, __dirname)
 * exports: 用于支持CommonJS模块化规范的暴露语法
 * require: 用于支持CommonJS模块化规范的引入语法
 * module: 用于支持CommonJS模块化规范的暴露语法
 * __filename: 当前运行文件的绝对路径
 * __dirname: 当前运行文件所在文件夹的绝对路径
 * 
 * 2. 外层函数的作用
 * 1）用于支持模块化语法
 * 2）隐藏服务器内部实现(从作用域角度去看)
 */

// 输出该外层函数
// function (exports, require, module, __filename, __dirname)
console.log(arguments.callee.toString())
console.log(__filename) // /Users/maolu/Desktop/LearnFE/Node/learn_node/1.node中函数的特点/node_function.js
console.log(__dirname) // /Users/maolu/Desktop/LearnFE/Node/learn_node/1.node中函数的特点