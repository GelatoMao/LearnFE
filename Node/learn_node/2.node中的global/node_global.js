// 1.浏览器端 js组成
/**
 * 1. BOM  window浏览器对象模型 API(location history)
 * 2. DOM document文档对象模型 API(对DOM增删改查)
 * 3. ES6
 */

// 2.node端 js组成
/**
 * 1. 没有BOM 因为服务器不需要(服务器端没有浏览器对象)
 * 2. 没有DOM 因为没有浏览器窗口
 * 3. 几乎包含了所有ES规范
 * 4. 没有window 取而代之的是global全局变量
 */

// 3.global的一些常用属性 函数
/**
  clearInterval: 清除循环定时器
  clearTimeout: 清除延迟定时器
  setInterval: 设置循环定时器
  setTimeout: 设置延迟定时器
  clearImmediate: 清空立即执行函数
  setImmediate: 设置立即执行函数
*/


// 在Node中禁止函数的this指向global
console.log(this) // {} 这边的this指向的是一个空对象
console.log(global)