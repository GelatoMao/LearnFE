<template>
  <div class="">
    <h2>首页</h2>
    <!-- 子路由需要在首页显示 需要在此添加router-view  这边需要完整路径-->
    <router-link to="/home/news">新闻 | </router-link>
    <router-link to="/home/message">信息</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {
      path: "/home/news",
    }
  },
  computed: {},
  watch: {},
  created() {
    console.log("home created")
  },
  destroyed() {
    console.log("home destroyed")
  },
  // 当路由处于激活状态时调用
  //activated和deactivated这两个函数  只有在该组件被保持了状态使用了keep-alive时，才是有效的
  activated() {
    console.log("activated")
    this.$router.push(this.path)
  },
  // deactivated() {
  //   console.log("deactived")
  //   // 在离开之前将path保留下来 再次被激活的时候再将path push进去
  //   //这个方法有弊端 因为this.$route获取的是激活的路由 但是deacticated调用的时候 要获取的路由已经不属于激活状态
  //   this.path = this.$route.path
  // },
  //在路由即将离开之前调用 再次跳转到页面的时候 保持上次离开时的状态
  beforeRouteLeave(to, from, next) {
    console.log(this.$route.path)
    this.path = this.$route.path
    next()
  },
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>
