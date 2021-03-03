import React, { Component } from 'react'

export default class FormSub extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: 'hi',
      Validate: {
        title: {
          required: true,
          minLen: 6,
          maxLen: 10,
          validate: true,
          msg: '输入有误'
        }
      }
    }
  }

  handleChange = (e) => {
    //设置状态 是异步执行 这边也要对输入内容进行判断
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.validateInput()
    })
  }

  validateInput = () => {
    const { title, Validate } = this.state
    let tempValidate = false
    const len = title.length
    const min = Validate.title.minLen
    const max = Validate.title.maxLen
    if (len >= min && len <= max) {
      tempValidate = true
    }
    this.setState((preState) => {
      return Object.assign({}, preState, {
        Validate: {
          title: Object.assign({}, preState.Validate.title, {
            validate: tempValidate
          })
        }
      })
    })

  }
  handleSubmit = (e) => {
    //阻止表单的默认行为 这边就是提交
    e.preventDefault()
    //下面一般要做两件事
    //第一：做表单的校验
    this.validateInput()
    //第二：做表单提交到后台的ajax请求
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Todo:<input type="text" name="title" onChange={this.handleChange} value={this.state.title} />
            {!this.state.Validate.title.validate && <span style={{ color: 'red' }}>{this.state.Validate.title.msg}</span>}
          </label>
          <br />
          <input type="submit" value="提交" />
        </form>
      </div>
    )
  }
}
