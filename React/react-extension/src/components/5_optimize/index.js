import React, { Component } from 'react'
import './index.css'

export default class Parent extends Component {
  state = {
    name: 'haha'
  }

  changeName = () => {
    this.setState({
      name: 'lala'
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 目前的props 和 state
    // console.log(this.props, this.state) // {} {name:'haha'} 
    // 接下来变化的目标props 目标state
    // console.log(nextProps, nextState) // {} {name:'lala'}
    // 当前state和nextState的值相等就不发生改变 关闭阀门
    if (this.state.name === nextState.name) {
      return false
    }
    return true
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

class Child extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // 目前的props 和 state
    console.log(this.props, this.state) // {} {name:'haha'} 
    // 接下来变化的目标props 目标state
    console.log(nextProps, nextState) // {} {name:'lala'}
    // 当前props和nextProps的值相等就不发生改变 关闭阀门
    if (this.props.name === nextProps.name) {
      return false
    }
    return true
  }

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
