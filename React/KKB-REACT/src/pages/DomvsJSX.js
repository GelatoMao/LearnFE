import React, { Component } from 'react'

export default class DomvsJSX extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isChecked: true
    }
  }

  handleChange = (e) => {
    this.setState({
      isChecked: e.target.checked
    })
  }
  
  render() {
    return (
      <div>
        {/* 这个input框就是一种受控组件 */}
        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange} />
        {/* 非受控组件 */}
        <input type="checkbox" defaultChecked={this.state.isChecked} />
        {/* 声明2个类变量 */}
        <p className={`${this.state.isChecked ? 'checked' : ''} kk`}>指定className</p>
        <h3>htmlFor</h3>
        {/* label根据id值来选中文本框 */}
        <label htmlFor="demo">选择文本框</label>
        <input type="text" id="demo" />
      </div>
    )
  }
}
