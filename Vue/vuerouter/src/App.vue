<template>
  <div id="app">
    <!-- router-link最终是会被渲染成a标签的 -->
    <!-- tag属性可以设置router-link渲染成什么元素 -->
    <!-- 默认使用的是history.pushState() 页面之间可以来回跳转 如果使用replaceState 页面就不会跳转 直接写上replace属性就行 这样返回按钮就没有效果了-->
    <!-- 当router-link属于激活状态 即点击时 会自动添加router-link-active类名 但是这个类名有点长 可以通过active-class来改变这个类名 但是一般不建议这么做-->
    <!-- <router-link to="/home" tag="button" replace>首页|</router-link>
    <router-link to="/about" tag="button" replace>关于|</router-link> -->

    <router-link to="/home">首页 | </router-link>
    <router-link to="/about">关于 | </router-link>
    <router-link :to="'/user/' + userId">用户 | </router-link>
    <!-- 如果想通过query方式传递参数 这边不能是字符串的形式  必须是一个对象 -->
    <!-- <router-link to="/profile">档案</router-link> -->
    <router-link
      :to="{
        path: '/profile',
        query: {
          name: 'lala',
          age: 18,
          height: 1.88,
        },
      }"
      >档案</router-link
    >
    <hr />
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <!-- router-view决定了组件渲染的位置 -->
    <!-- exclude将Profile这个组件排除在外 该组件可以频繁被创建 -->
    <keep-alive exclude="Profile">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    homeClick() {
      //通过代码的方式改变路由 vue-router给所有组件都添加了一个属性$router
      //push 类似于 pushState
      //replace类似于 replaceState
      //catch()解决浏览器报错 Avoided redundant navigation to current location error in vue?
      // this.$router.push("/home").catch(() => {})
      this.$router.replace("/home").catch(() => {})
    },
    aboutClick() {
      // this.$router.push("/about").catch(() => {})
      this.$router.replace("/about").catch(() => {})
    },
  },
  data() {
    return {
      userId: "hahah",
    }
  },
}
</script>

<style>
/* .router-link-active {
  color: red;
} */
</style>
