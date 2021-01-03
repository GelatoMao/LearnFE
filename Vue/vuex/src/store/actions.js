//处理异步操作 actions中的方法有一个默认参数context:上下文 可以暂时将context理解成store对象
export default {
  aUpdateInfo(context, payload) {
    //模拟异步操作
    setTimeout(() => {
      //这种方法直接修改了state中的属性值 是不可以的
      // context.state.info.name = 'xiaoming'
      context.commit('updateInfo')
      console.log(payload);
    }, 1000)
  }
}