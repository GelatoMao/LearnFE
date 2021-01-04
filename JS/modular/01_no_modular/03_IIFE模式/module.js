/**
 * IIFE模式: 匿名函数自调用(闭包)
 * IIFE : immediately-invoked function expression(立即调用函数表达式)
 * 作用: 数据是私有的, 外部只能通过暴露的方法操作
 * 问题: 如果当前这个模块依赖另一个模块怎么办?
 */

((w) => {
  //内部私有数据，不允许别人修改
  let data = 'haha'

  function test() {
    console.log(data)
  }

  function test2() {
    console.log(data.toUpperCase())
  }

  //如果有多个方法的话 要写多个这种形式进行暴露 会不方便 可以将其存在一个对象中 然后将对象暴露在window上
  // w.test = test
  // w.test2 = test2

  let module1 = { test, test2, data }
  //将module1挂在window上，暴露出去
  w.module1 = module1

})(window)
