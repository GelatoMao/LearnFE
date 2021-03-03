import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const { date } = this.state
    return (
      <div>
        <h3>hahhah</h3>
        {/* date是一个对象 对象不能直接显示 要转成字符串的形式 */}
        <p>{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
