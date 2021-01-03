import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 在这边挂载完之后 所有组件都有$router和$store对象
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
