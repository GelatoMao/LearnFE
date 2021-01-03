<template>
  <div class="">
    <h2>-----App内容：module中的内容----</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改姓名</button>
    <!-- getters中的方法不关心是定义在store中还是模块当中 -->
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <h2>-----App内容：info对象的内容是否是响应式----</h2>
    <h2>{{ $store.state.info }}</h2>
    <button @click="updateInfo">修改信息</button>

    <h2>--------------APP内容------------</h2>
    <h2>{{ $store.state.counter }}</h2>
    <button @click="handleAdd">+</button>
    <button @click="handleSub">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h2>------App内容：getters相关信息-----</h2>
    <h2>{{ $store.getters.powerCounter }}</h2>
    <h2>{{ $store.getters.more20Stu }}</h2>
    <h2>{{ $store.getters.more20StuLength }}</h2>
    <!-- 过滤大于12岁的 -->
    <h2>{{ $store.getters.moreAgeStu(12) }}</h2>

    <h2>-----------hellovuex内容---------</h2>
    <hello-vuex />
  </div>
</template>

<script>
import HelloVuex from "@/components/HelloVuex"
import { INCREMENT } from "@/store/type.js"
export default {
  name: "",
  components: {
    HelloVuex,
  },
  props: {},
  data() {
    return {
      message: "APP组件",
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleAdd() {
      // 通过commit方法来发送
      this.$store.commit(INCREMENT)
    },
    handleSub() {
      this.$store.commit("decrement")
    },
    addCount(count) {
      //payload:负载
      //1.普通提交封装
      // this.$store.commit("incrementCount", count)

      //2.特殊的提交封装
      this.$store.commit({
        type: "incrementCount",
        count,
      })
    },
    addStudent() {
      //如果有多个东西需要传入的话，一般将其放入对象里面，统一传过去
      const stu = { id: 114, name: "answer", age: 35 }
      this.$store.commit("addStudent", stu)
    },
    updateInfo() {
      // commit是用于提交mutation中的方法 dispatch用于提交actions中的方法
      // this.$store.commit("updateInfo")
      //第二个参数放置要传递的参数
      this.$store.dispatch("aUpdateInfo", "payload")
    },
    //对于模块中定义的方法  首先会在大的store里面去找 找不到会去对应的模块去找
    updateName() {
      this.$store.commit("updateName", "lisi")
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  },
}
</script>

<style scoped lang="less"></style>
