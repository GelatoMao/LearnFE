const a = require('./04moduleexportsa')
// console.log(a.greeting('zhangsan'));
console.log(a)//{ x: 100, greeting: [Function: greeting] }

//在04文件中 改变了module.exports的指向 重新输出a 结果就会发生变化
console.log(a)//{ name: 'zhangsan' }
