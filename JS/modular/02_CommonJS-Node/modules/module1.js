/*
* 第一种暴露方式：module.exports = value
暴露一个对象
* */
module.exports = {
  data: 'haha',
  test() {
    console.log(this.data)
  }
}

//下面这行代码同样会执行，但是没有经过任何的暴露
console.log('nice')