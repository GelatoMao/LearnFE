// 引入mongoose
let mongoose = require('mongoose')
// 3.1 创建约束对象
let Schema = mongoose.Schema

// 3.2 创建约束对象 制定规则
let studentsRule = new Schema({
  stu_id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  hobby: [String], // 限制爱好只能是数组形式 并且数组中的每一项必须是字符串
  info: Schema.Types.Mixed, // 接收所有类型
  date: {
    type: Date,
    default: Date.now()
  },
  enable_flag: {
    type: String,
    default: 'Y'
  }
})

// 3.3 创建模型对象
module.exports = mongoose.model('students', studentsRule) // 用于生成某个集合所对应的模型对象

