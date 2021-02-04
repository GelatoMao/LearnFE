const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('数据库连接成功'))
  .catch((err) => console.log(err, '数据库连接失败'))

//创建集合规则
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String,
  hobbies: [String]
})

//使用规则创建集合
//1.集合名称 
//2.集合规则
const User = mongoose.model('User', userSchema)
//查询用户集合中的所有文档  返回一个数组 数组中是一个个对象
// User.find().then(result => console.log(result))

//查询id为xxxx的数据 虽然根据id查询的数据 只会返回一条数据 通过find方法去查询 无论查询数据有多少 它返回的都是一个数组
//通过_id查询文档
// User.find({ _id: '5c09f1e5aeb04b22f8460965' }).then(result => console.log(result))

//findOne返回一条文档 默认返回当前集合中的第一条文档
// User.findOne({name:'李四'}).then(result => console.log(result))

//查询年龄大于20且小于40的文档
// User.find({ age: { $gt: 20, $lt: 40 } }).then(result => console.log(result))

//$in 是包含   匹配包含足球的文档
// User.find({ hobbies: { $in: ['足球'] } }).then(result => console.log(result))

//select中筛选的是要查询的字段 默认是带有_id字段的 但是如果不想要_id字段 就在前面添加一个 - -_id就代表不查询id字段
User.find().select('name email -_id').then(result => console.log(result))

