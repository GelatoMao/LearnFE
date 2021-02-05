/**
 * 该模块主要用于连接数据库 且判断数据库的连接状态
 */

// 引入mongoose
let mongoose = require('mongoose')
// 使用一个新的索引创建器
mongoose.set('useCreateIndex', true)

const DB_NAME = 'User' // 数据库名
const PORT = 27017 // 端口号
const IP = 'localhost' // 主机名(ip地址)

function connectMongo(callback) {
  // 1. 连接数据库 根据warning 添加了后面的一个对象
  mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, { useUnifiedTopology: true, useNewUrlParser: true })

  // 2.绑定数据库连接的监听
  mongoose.connection.on('open', err => {
    if (err) {
      console.log('数据库连接失败', err)
      callback('失败')
    } else {
      console.log('数据库连接成功')
      callback()
    }
  })
}

module.exports = connectMongo
