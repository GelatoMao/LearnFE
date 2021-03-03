import React, { Component } from 'react'

function AddMsg(props) {
  return (
    <button onClick={() => props.addNum(1)}>
      添加数据:{props.num}
    </button>
  )
}

function DeleteMsg(props) {
  return (
    <button onClick={() => props.deleteNum(1)}>
      删除数据:{props.num}
    </button>
  )
}

export default class StateLifting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      num: 0
    }
  }

  addNum = (num) => {
    //因为要依赖之前的值，所以这边通过函数的方式来更新state
    this.setState((preState) => ({
      num: preState.num + num
    }))
  }

  deleteNum = (num) => {
    this.setState((preState) => ({
      num: preState.num - num
    }))
  }
  
  render() {
    return (
      <div>
        总消息条数是:{this.state.num}
        <hr />
        <AddMsg num={this.state.num} addNum={this.addNum} />
        <hr />
        <DeleteMsg num={this.state.num} deleteNum={this.deleteNum} />
      </div>
    )
  }
}
