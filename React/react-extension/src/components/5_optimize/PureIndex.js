import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  state = {
    name: 'haha'
  }

  changeName = () => {
    this.setState({
      name: 'lala'
    })
  }
  render() {
    console.log('parent render')
    const { name } = this.state
    return (
      <div className="parent">
        <h3>我是parent组件</h3>
        <span>我的名字是:{name}</span>
        <button onClick={this.changeName}>改变名字</button>
        <Child name="hehe" />
      </div>
    )
  }
}

class Child extends PureComponent {
  render() {
    console.log('child render')
    return (
      <div className="child">
        <h3>我是child组件</h3>
        <p>我收到的父组件传过来的名字是:{this.props.name}</p>
      </div>
    )
  }
}
