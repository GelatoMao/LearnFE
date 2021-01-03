import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

//1.安装插件
Vue.use(Vuex)

//2.创建对象
const state = {
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
}

//3.导出store独享
export default new Vuex.Store({
  //state中定义的数据都会被加入到响应式系统中，而响应式系统会监听属性的变化，会通知所有界面中用到该属性的地方，让界面发生刷新
  state,
  mutations,
  actions,
  //对state里面的数据进行细分
  modules: {
    a: moduleA
  },
  getters
})
