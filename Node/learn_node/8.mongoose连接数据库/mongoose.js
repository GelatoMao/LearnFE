// 引入mongoose
let mongoose = require('mongoose')

// 1. 连接数据库 根据warning 添加了后面的一个对象
// useUnifiedTopology: true 使用一个统一的新的拓扑结构
// useNewUrlParser: true 使用一个新的URL解析器 用于解决一些安全性问题
mongoose.connect('mongodb://localhost:27017/test', { useUnifiedTopology: true, useNewUrlParser: true })

// 2.绑定数据库连接的监听
mongoose.connection.on('open', err => {
  if (err) {
    console.log('数据库连接失败', err)
  } else {
    console.log('数据库连接成功')
    // 3.操作数据库
    console.log('操作数据库')
  }
})