import React, { Component } from 'react'

export default class DemoState extends Component {
  state = {
    count: 0
  }

  // 对象式的setState
  add1 = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log('改变值的count:', this.state.count)
    })
    // setState是异步更新 所以这边输出count值还是初始的0 如果想输出更改后的值 可以写到回调函数里面
    console.log('未改变值的count:', this.state.count)
  }

  // 函数式的setState 参数为一个函数 有两个参数 一个是state 表示之前的state 一个是props 
  add2 = () => {
    this.setState((state, props) => ({
      count: state.count + 1
    }))
  }

  render() {
    return (
      <div>
        <h1>当前求和为: {this.state.count}</h1>
        <button onClick={this.add1}>+1</button> <br />
        <button onClick={this.add2}>+1</button>
      </div>
    )
  }
}
