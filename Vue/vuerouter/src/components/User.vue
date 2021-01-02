<template>
  <div class="">
    <h2>用户页面</h2>
    <h3>{{ userId }}</h3>
    <h3>{{ $route.params.userId }}</h3>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    //获取动态路由传过来的参数
    userId() {
      //this.$route 获取的是此时点击的路由对象 获取传过来的Id值
      return this.$route.params.userId
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style scoped lang="less"></style>
