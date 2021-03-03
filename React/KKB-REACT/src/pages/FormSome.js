import React, { Component } from 'react'

export default class FormSome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      isAdmin: false,
      isRem: true
    }
  }

  handleChange = (e) => {
    this.setState({
      // 当属性为变量时，一定要加大括号
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    })
  }
  render() {
    return (
      <div>
        <form>
          {/* input标签里面的name属性一定要与state之中的值一致 */}
          <label>用户名:<input type="text" name="name" onChange={this.handleChange} value={this.state.name} /></label>
          <br />
          <label>邮箱:<input type="text" name="email" onChange={this.handleChange} value={this.state.email} /></label>
          <label>是否是管理员:<input type="checkbox" name="isAdmin" onChange={this.handleChange} defaultChecked={this.state.isAdmin} /></label>
          <label>是否记住用户名密码:<input type="checkbox" name="isRem" onChange={this.handleChange} defaultChecked={this.state.isRem} /></label>
        </form>
        <hr />
        name:{this.state.name}<br />
        mail:{this.state.email}<br />
        isAdmin:{this.state.isAdmin ? 'true' : 'false'}<br />
        isRem:{this.state.isRem ? 'true' : 'false'}
      </div>
    )
  }
}
