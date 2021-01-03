export default {
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