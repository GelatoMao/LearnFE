
// 暴露了一个数组
exports.peiqi = [1, 3, 5, 7, 9]

//同时写两个以第二个为准
module.exports = function lala() {
  console.log('lala');
}

/*问题:
  1.暴露的本质到底是什么?module.exports所指向的那个对象
  2.在CommonJs模块规范中，module.exports 和 exports.xxx 不能混用。
  3.如果混用，以module.exports为主*/
/*module.exports = function haha() {
  console.log('哈哈')
}*/


