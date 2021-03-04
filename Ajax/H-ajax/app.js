//1.引入express框架
const express = require('express')
//处理路径模块
const path = require('path')

//处理接收post请求的
const bodyParser = require('body-parser')

//2.创建应用对象 web服务器
const app = express()

//调用urlencoded说明解析的是x-www-form-urlencoded这种格式的
// app.use(bodyParser.urlencoded())
// app.use(bodyParser.urlencoded({ extended: true }));
//解析json格式的需要调用json方法
app.use(bodyParser.json())

//静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')))

//3.创建路由规则
//request是对请求报文的封装 response是对响应报文的封装

//对应 01ajax.html
app.get('/first', (request, response) => {
  //设置响应
  response.send('hello express')
})

//对应02.html
app.get('/responseData', (req, res) => {
  //send除了可以接收字符串，也可以接收对象作为参数
  res.send({ "name": "zs" })
})

//对应03.html
//在服务器端接收客户端传递过来的get请求参数，get请求参数需要通过req.query来获取，它返回的是一个对象类型的值，在这个对象里面存储的是客户端传递过来的请求参数
app.get('/get', (req, res) => {
  //在客户端打印服务器端获取到的数据
  res.send(req.query)
})

//对应04.html
//在服务器端要接收post请求，要借助第三方模块body-parser 之后通过req.body来获取客户端传递到服务器端的post请求参数
app.post('/post', (req, res) => {
  res.send(req.body)
})

//对应05.html
app.post('/json', (req, res) => {
  res.send(req.body)
})

//对应06.html
app.get('/readyState', (req, res) => {
  res.send('hello')
})

app.get('/error', (req, res) => {
  //在服务器端设置给客户端的响应码
  res.status(400).send('not ok')
})

//4.监听端口启动服务
app.listen(8000, () => {
  console.log('端口8000');
})
