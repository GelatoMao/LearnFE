//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装

//get请求
app.get('/server', (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  response.send('HELLO AJAX GET');
});

//post请求
app.post('/server', (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  //设置响应体
  response.send('HELLO AJAX POST');
});

//JSON响应
app.get('/json-server', (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  //响应一个数据 
  const data = {
    name: 'hahah'
  }
  //对对象进行字符串转换 放入send方法中
  let str = JSON.stringify(data)
  //设置响应体 send()方法中只能接受字符串
  response.send(str);
});

//延时响应
app.get('/delay', (request, response) => {
  //设置响应头 设置允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*')
  setTimeout(() => {
    //设置响应体
    response.send('延时响应')
  }, 3000)
})

//4. 监听端口启动服务
app.listen(8000, () => {
  console.log("服务已经启动, 8000 端口监听中....");
});