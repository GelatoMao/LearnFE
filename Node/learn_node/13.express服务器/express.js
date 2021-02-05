// 引入express
const { response } = require('express')
const express = require('express')

// 1.创建app服务对象
const app = express()
// 禁止服务器返回X-Powered-By
app.disable('x-powered-by')

// 2.配置路由
/**
 * 对请求的url进行分类 服务器根据分类决定交给谁去做
 * 这边的路由都是后端路由
 * 路由可以理解为：一组组key-value的组合 key:请求方式+URI路径 value:回调处理函数
 * 根据路由定义的顺序(写代码的顺序) 依次定义好路由 随后放入一个类似数组的结构 当有请求时 依次取出匹配 若匹配成功 不再继续匹配了
 */

app.get('/', (request, response) => {
  console.log(request.query) // 在express中可以直接通过request.query获取请求的参数对象 { name: 'zhangsan', age: '12' }
  response.send('主页')
})

app.get('/food', (request, response) => {
  response.send('food')
})

app.post('/', (request, response) => {
  response.send('post请求')
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功')
  else console.log(err)
})