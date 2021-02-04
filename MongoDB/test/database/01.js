const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err, '数据库连接失败'))

//创建集合规则
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  isPublished: Boolean
})

//使用规则创建集合
//1.集合名称 
//2.集合规则
const Course = mongoose.model('Course', courseSchema)
//创建集合对象实例 创建文档 还未保存 Course相当于是一个构造函数
const course = new Course({
  name: 'node',
  author: 'haha',
  isPublished: true
})
//将当前创建的文档插入到数据库中
course.save()

