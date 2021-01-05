/*
* module3使用【默认暴露】,只能暴露一次。
* */
// export default 2

export default {
  name: 'haha',
  age: 18,
  speak() {
    console.log(`我的名字是${this.name},我的年龄是${this.age}`);
  }
}