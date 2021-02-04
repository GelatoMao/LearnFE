/*
* 第一种暴露方式：module.exports = value
* */
module.exports = {
  data: 'lala',
  test() {
    console.log(this.data)
  }
}