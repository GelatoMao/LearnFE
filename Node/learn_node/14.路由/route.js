const { request, response } = require("express");

let express = require('express')
let app = express()


/**
 * request 和 response的 api
 * 
 * request对象
 * request.query 获取查询字符串参数(query参数) 拿到的是一个对象
 * request.params 获取get请求参数路由的参数 拿到的是一个对象
 * request.body 获取post请求体 拿到的是一个对象(要借助一个中间件)
 * request.get(xxx) 获取请求头中指定的key对应的value
 * 
 * response对象：
 * response.send()	给浏览器做出一个响应
 * response.end()	给浏览器做出一个响应（不会自动追加响应头）
 * response.download()	告诉浏览器下载一个文件，可以传递相对路径
 * response.sendFile()	给浏览器发送一个文件 备注：必须传递绝对路径
 * response.redirect()	重定向到一个新的地址（url）
 * response.set(key,value)	自定义响应头内容
 * response.get(key)	获取响应头指定key对应的value  很少使用
 * response.status(code)	设置响应状态码
 */


// 根路由
app.get('/', (request, response) => {
  console.log(request.query)
  console.log(request.get('Host'))
  console.log(request.get('Referer'))
  response.send('根路由')
})

// 一级路由
app.get('/demo', (request, response) => {

  /**
  * 服务器给浏览器响应的定义：
  * 1.服务器给浏览器一段文字
  * 2.服务器给了浏览器一个图片
  * 3.服务器给了浏览器一个视频
  * 4.服务器告诉浏览器下载一个文件
  * 5.服务器告诉浏览器重定向
  * 一次请求只能对应一个响应 多个响应的时候以response.send为主
  * 所以当download和send同时存在的时候 只会执行send
  */
  // response.download('./1.jpg')
  // response.sendFile(__dirname + '/haha.html')
  // response.redirect('https://www.baidu.com')
  // response.redirect('/demo/test') // 重定向的服务器地址一致 只不过路由不一样 前面可省
  response.send('demo路由返回的数据')
})

// 二级路由
app.get('/demo/test', (request, response) => {
  response.send('demo/test返回的数据')
})

// 参数路由
app.get('/food/:id', (request, response) => {
  console.log(request.params)
  let { id } = request.params
  response.send(`我是${id}号`)
})

app.listen(3000, err => {
  if (!err) console.log('服务器启动成功')
  else console.log(err)
})