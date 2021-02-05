/**
 * 专门用于管理登录 注册业务的路由
 */

const { Router } = require('express')
const router = new Router()

// 引入模型对象，进行CRUD
const usersModel = require('../model/usersModel')
// 用于处理用户的注册请求，有很多业务逻辑(校验数据的有效性等) -------- 业务路由
router.post('/register', (req, res) => {
  // 1 获取用户输入 req.body 返回一个对象
  /**
   * {
   * nick_name: '111',
   * email: '111@qq.com',
   * password: '111',
   * re_password: '111'
   * }
   */
  const { nick_name, email, password, re_password } = req.body
  /*
   * 2.校验数据的合法性:
   *     2.1：校验成功
   *           -去数据库中查找该邮箱是否注册过
   *               2.1.1：注册过：提示用户邮箱已被占用。
   *               2.1.2：未注册：写入数据库
   *     2.2：校验失败
   *           -提示用户具体哪里输入的不正确
   * */

  const emailReg = /^[a-zA-Z0-9_]{4,20}@[a-zA-Z0-9]{2,10}\.com$/
  // 昵称必须是中文
  const nickNameReg = /[\u4e00-\u9fa5]/gm
  const passwordReg = /^[a-zA-Z0-9_@#.+&]{6,20}$/

  // 使用正则去校验
  if (!nickNameReg.test(nick_name)) {
    res.send('昵称格式不合法，必须为中文')
  } else if (!emailReg.test(email)) {
    res.send('邮箱格式不合法，用户名必须4-20位，主机名必须2-10位')
  } else if (!passwordReg.test(password)) {
    res.send('密码格式不合法，必须6-20位')
  } else if (password !== re_password) {
    res.send('两次输入密码不一致')
  } else {
    // 去数据库中查询该邮箱是否注册过
    usersModel.findOne({ email }, (err, data) => {
      if (data) {
        // 如果注册过 引入计数模块 当达到一个敏感的阈值 触发安全性机制
        console.log(`邮箱为${email}的用户注册失败，因为邮箱重复`)
        res.send('该邮箱已被注册过，请更换邮箱')

      } else {
        usersModel.create({ nick_name, email, password, re_password }, err => {
          if (!err) {
            console.log(`邮箱为${email}的用户注册成功`)
            res.send('注册成功!')
          } else {
            // 如果写入失败 引入报警模块 当达到敏感阈值 触发报警
            console.log(err)
            res.send('您当前的网络不稳定，稍后重试')
          }
        })
      }
    })
  }
})

// 用于处理用户的登录请求，有很多业务逻辑(校验数据的有效性等) -------- 业务路由
router.post('/login', (req, res) => {
  const { email, password } = req.body
  const emailReg = /^[a-zA-Z0-9_]{4,20}@[a-zA-Z0-9]{2,10}\.com$/
  const passwordReg = /^[a-zA-Z0-9_@#.+&]{6,20}$/

  if (!emailReg.test(email)) {
    res.send('邮箱格式不合法，用户名必须4-20位，主机名必须2-10位')
  } else if (!passwordReg.test(password)) {
    res.send('密码格式不合法，必须6-20位')
  } else {
    // 去数据库中查找
    usersModel.findOne({ email, password }, (err, data) => {
      if (err) {
        console.log(err)
        res.send('网络不稳定，请稍后重试')
        return
      }
      if (data) {
        res.redirect('https://www.baidu.com')
        return
      }
      res.send('用户名或者密码错误')
    })
  }
})

module.exports = function(){
  return router
}