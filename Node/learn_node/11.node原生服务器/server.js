// 不借助任何第三方库 搭建node原生服务器

// 1. 引入Node内置的http模块
let http = require('http')
// 引入内置模块 用于解析key=value&key=value...这种形式的字符串为js中的对象
/**
 * 1. key=value&key=value...的编码形式:urlencoded编码形式
 * 2.请求地址里携带urlencoded编码形式的参数 叫做 查询字符串参数
 */
// 引入的qs是一个对象 有parse()方法
let qs = require('querystring')

// 2. 创建服务对象
let server = http.createServer((request, response) => {
  // 获取客户端携带过来的urlencoded编码形式的参数
  let params = request.url.split('?')[1] // name=haha&age=18
  let paramsObj = qs.parse(params) // 转化成对象 {name:'haha',age:'18'}
  console.log(paramsObj)

  const { name, age } = paramsObj

  response.setHeader('content-type', 'text/html;charset=utf-8')
  response.end(`<h1>姓名是${name} 年龄是${age}</h1>`)
  console.log(request.url)
})

// 3. 指定服务器运行的端口号(绑定端口监听)
server.listen(3000, err => {
  if (!err) console.log('服务器启动成功')
  else console.log(err)
})







