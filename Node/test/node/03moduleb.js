const a = require('./02modulea')
//输出了一个对象 对象中有add函数 证明了a就是exports对象
console.log(a);//{ add: [Function: add] }
console.log(a.add(1, 2));//3
