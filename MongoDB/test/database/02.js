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

//向集合中插入文档 另一种插入方式
Course.create({
  name: 'JavaScript111111',
  author: 'gelato',
  isPublished: false
}, (err, result) => {
  console.log(err);
  console.log(result);
})

Course.create({
  name: 'JavaScript2222',
  author: 'gelatomao',
  isPublished: false
}).then(result => {
  console.log(result);
})