//类似于计算属性 方法中默认有state参数 方法中的第二个默认参数是getters 而这个getters就是外面的getters
//如果要从store里面拿某个数据，这个数据是需要经过变化的，这种情况下一般在getters里面进行相应的变化
export default {
  powerCounter(state) {
    return state.counter * state.counter
  },
  //选出大于20岁的学生
  more20Stu(state) {
    return state.students.filter(s => s.age > 20)
  },
  //获取大于20岁的学生的个数 可以通过第二个参数getters来获取more20Stu这个方法 进而获取长度
  more20StuLength(state, getters) {
    return getters.more20Stu.length
  },
  //返回函数的形式 并且带有参数
  moreAgeStu(state) {
    // return function (age) {
    //   return state.students.filter(s => s.age > age)
    // }
    return age => {
      return state.students.filter(s => s.age > age)
    }
  }
}