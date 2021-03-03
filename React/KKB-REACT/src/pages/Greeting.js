import React, { Component } from 'react'

function UserGreeting(props) {
  return (
    <p>欢迎{props.username}</p>
  )
}

function GuestGreeting(props) {
  return (
    <p>请登陆！</p>
  )
}

export default class Greeting extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }

  render() {
    let greeting = <GuestGreeting />
    if (this.state.isLogin) {
      greeting = <UserGreeting username="hahhaha" />
    }
    return (
      <div>
        <h3>1.最基本的通过if实现的条件渲染</h3>
        {greeting}
        <h3>2.通过三元运算符实现条件渲染</h3>
        {this.state.isLogin ? <UserGreeting username="gelato" /> : <GuestGreeting />}
        <h3>3.通过&&实现条件渲染</h3>
        {
          this.state.isLogin && <UserGreeting username="LALALAL" />
        }
        {
          this.state.isLogin || <GuestGreeting />
        }
      </div>
    )
  }
}
