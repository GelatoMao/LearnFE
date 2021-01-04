/*
* app.js文件主要用于汇总modules里面的一个个模块
* JS代码可以在浏览器和node.js中运行，用commonjs模块化规范写的代码可以在
* 这两种环境中运行 commonjs是唯一的一个双端模块化

* 模块化要点：如何暴露 如何引入
* 主文件，用于汇总各个模块
* 注意：引入模块时：
* 1.如果引入的是第三方模块，则直接写模块名。
* 2.如果引入的是自定义模块，必须写路径。
* */
let module1 = require('./modules/module1.js')
//引入的同时，进行解构赋值
let module2 = require('./modules/module2.js')
//对象的解构赋值 引入的同时进行解构赋值
let { data, test } = require('./modules/module1.js')
//exports和module.exports 同时使用 以module.exports为准
let module3 = require('./modules/module3.js')
//引入的是第三方模块，直接写模块名 默认会去node_modules文件夹中去寻找
let uniq = require('uniq')

console.log(module1)//{ data: 'haha', test: [Function: test] }
console.log(module2)//{ hehe: [Function] }
console.log(module3)//[Function: lala]
module3()//lala
console.log(data)//haha
console.log(test)//[Function: test]
test()//undefined  这边要注意 通过解构赋值得到的方法调用后this指向应该改变了 获取不到data值了 先占坑！
console.log(uniq)//[Function: unique]

//如何使用一个模块取决于：模块暴露的是什么。
console.log(module1.data);//haha
module1.test()//haha
module2.hehe()//我是module2里的一个函数
console.log(module3.peiqi);//undefined
console.log(uniq([1, 3, 2, 5, 4, 3, 6, 7, 11, 10, 9, 8]));//uniq对数组去重且按数字排序
console.log(data)//haha
test()//undefined

// console.log(require('./modules/module1').data)
//验证内置关系
// console.log(module.exports === exports)
// console.log(module.exports)
// console.log(exports)
// console.log(require)