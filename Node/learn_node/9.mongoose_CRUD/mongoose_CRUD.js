// 引入mongoose
let mongoose = require('mongoose')
mongoose.set('useCreateIndex', true) // 使用一个新的索引创建器

// 1. 连接数据库 根据warning 添加了后面的一个对象
mongoose.connect('mongodb://localhost:27017/test', { useUnifiedTopology: true, useNewUrlParser: true })

// 2.绑定数据库连接的监听
mongoose.connection.on('open', err => {
  if (err) {
    console.log('数据库连接失败', err)
  } else {
    console.log('数据库连接成功')
    // 3.操作数据库
    console.log('操作数据库')

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
    let stuModel = mongoose.model('students', studentsRule) // 用于生成某个集合所对应的模型对象

    // CRUD

    // 新增操作  C
    stuModel.create({
      stu_id: '005',
      name: 'C罗',
      age: 18,
      sex: '男',
      hobby: ['足球 ', '健身'], // 限制爱好只能是数组形式 并且数组中的每一项必须是字符串
      info: 'yydshaha' // 接收所有类型
    }, (err, data) => {
      if (!err) console.log(data)
      else console.log(err)
    })

    // 查询操作 R

    // find方法  返回的是一个数组  即使是一条数据 也会包裹在数组里面
    /**
     * find方法  
     * 1. 如果找到数据 返回的是一个数组 即使是一条数据 也会包裹在数组里面
     * 2. 如果找不到 查询结果为空 返回一个空数组 []
     */

    stuModel.find({ name: 'e' }, (err, data) => {
      if (!err) console.log(data)
      else console.log(err)
    })
    /**
    * [{
    hobby: [ '足球 ', '听音乐' ],
    date: 2021-02-04T14:46:13.520Z,
    enable_flag: 'Y',
    _id: 601c08b5e47d3d6843adbc15,
    stu_id: '004',
    name: '梅西',
    age: 16,
    sex: '男',
    info: 'yyds',
    __v: 0}]
    */


    /**
     * findOne 方法
     * 若有结果 返回的是一个对象
     * 若查找结果为空  则返回 null
     */
    stuModel.findOne({ name: '梅' }, (err, data) => {
      if (!err) console.log(data)
      else console.log(err)
    })
    /**
     * {
    hobby: [ '足球 ', '听音乐' ],
    date: 2021-02-04T14:46:13.520Z,
    enable_flag: 'Y',
    _id: 601c08b5e47d3d6843adbc15,
    stu_id: '004',
    name: '梅西',
    age: 16,
    sex: '男',
    info: 'yyds',
    __v: 0
    }
     */


    // 更新 U  不要用update 用updateOne和updateMany替换 
    // 更新年龄为20 
    stuModel.updateOne({ name: '梅西' }, { age: 20 }, (err, data) => {
      if (!err) console.log(data)
      else console.log(err)
    })

    // 删除 D
    stuModel.deleteMany({ age: 18 }, (err, data) => {
      if (!err) console.log(data)
      else console.log(err)
    })
  }
})