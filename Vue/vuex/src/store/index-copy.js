import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from '@/store/type.js'

//1.安装插件
Vue.use(Vuex)

//创建对象
const moduleA = {
  state: {
    name: 'aa'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    // 模块中的commit只会调用模块中的mutation
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', 'xiaohua')
      }, 1000)

    }
  },
  getters: {
    fullname(state) {
      return state.name + '111'
    },
    //通过getters来获取fullname方法返回的值
    fullname2(state, getters) {
      return getters.fullname + '222'
    },
    // 模块中的getters方法里面有第三个参数rootState
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }

  }
}

export default new Vuex.Store({
  //state中定义的数据都会被加入到响应式系统中，而响应式系统会监听属性的变化，会通知所有界面中用到该属性的地方，让界面发生刷新
  state: {
    counter: 1000,
    students: [
      { id: 110, name: 'why', age: 18 },
      { id: 111, name: 'kobe', age: 24 },
      { id: 112, name: 'james', age: 30 },
      { id: 113, name: 'curry', age: 10 }
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  // 不要直接修改state里面值的状态 通过mutation去修改
  //如果在mutations中写异步操作 会出现问题 页面会渲染出来 但是vue-tools中的state不会立刻改变
  mutations: {
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
  },
  //处理异步操作 actions中的方法有一个默认参数context:上下文 可以暂时将context理解成store对象
  actions: {
    aUpdateInfo(context, payload) {
      //模拟异步操作
      setTimeout(() => {
        //这种方法直接修改了state中的属性值 是不可以的
        // context.state.info.name = 'xiaoming'
        context.commit('updateInfo')
        console.log(payload);
      }, 1000)
    }
  },
  //对state里面的数据进行细分
  modules: {
    a: moduleA
  },
  //类似于计算属性 方法中默认有state参数 方法中的第二个默认参数是getters 而这个getters就是外面的getters
  //如果要从store里面拿某个数据，这个数据是需要经过变化的，这种情况下一般在getters里面进行相应的变化
  getters: {
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
})
