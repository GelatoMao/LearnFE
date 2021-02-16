import React, { Component } from 'react'
import './index.css'

// createContext需要放到所有组件都能访问到的地方
// 创建context对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext

export default class DemoContext extends Component {
  state = {
    username: 'Tom',
    age: 18
  }
  render() {
    const { username, age } = this.state
    return (
      <div className="parent">
        <h3>我是DemoContext组件</h3>
        <h4>我的用户名是:{username}</h4>
        {/* <A username={this.state.username} /> */}
        {/* Provider里面的所有组件都可以获取到value值 包括A组件,B组件 传多个值的时候用对象的形式*/}
        <Provider value={{ username, age }}>
          <A />
        </Provider>
      </div>
    )
  }
}

class A extends Component {
  // 声明一下 自己想接收到context的值
  static contextType = MyContext
  render() {
    return (
      <div className="child">
        <h3>我是A组件</h3>
        {/* <h4>我从DemoContext组件接收到的用户名是:{this.props.username}</h4> */}
        {/* <B username={this.props.username} /> */}
        <h4>从DemoContext中接收到的值是:{this.context.username}</h4>
        <B />
      </div>
    )
  }
}

class B extends Component {
  // 声明一下 自己想接收到context的值
  static contextType = MyContext
  render() {

    return (
      <div className="grand">
        <h3>我是C组件</h3>
        {/* <h4>我从A组件接收到的用户名是:{this.props.username}</h4> */}
        <h4>我从DemoContext组件接收到的用户名是:{this.context.username}</h4>
        <h4>我从DemoContext组件中收到的年龄是:{this.context.age}</h4>
        <C />
      </div>
    )
  }
}

// 假设C是函数式组件的方式 通过consumer来获取
function C() {
  return (
    <div>
      <p>hahhaha  我是函数式组件</p>
      <Consumer>
        {
          value => {
            return `从DemoContext组件获取的姓名是${value.username},获取的年龄是${value.age}`
          }
        }
      </Consumer>
    </div>
  )
}

