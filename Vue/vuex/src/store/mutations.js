import { INCREMENT } from '@/store/type.js'

//不要直接修改state里面值的状态 通过mutation去修改
//如果在mutations中写异步操作 会出现问题 页面会渲染出来 但是vue-tools中的state不会立刻改变
export default {
  //test(){}  ['test'](){}
  //方法中默认有一个state参数
  [INCREMENT](state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  //mutations中携带参数 payload相当于一个对象
  incrementCount(state, payload) {
    state.counter += payload.count
  },
  addStudent(state, stu) {
    state.students.push(stu)
  },
  updateInfo(state) {
    state.info.name = 'haha'
    //添加额外属性
    state.info['address'] = 'iceland'
  }
}